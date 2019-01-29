import React from "react";
import queryString from "query-string";
import { getVolume } from "../../utils/api/google";
import CoverImg from "../CoverImg";
import moment from "moment";
import { Spring } from "react-spring";
import PropTypes from "prop-types";

const Catagories = ({ categories }) => {
  return (
    <p>
      {categories.map(e => (
        <span>{e} </span>
      ))}
    </p>
  );
};

Catagories.propTypes = {
  catagories: PropTypes.array
};

const RenderVolume = ({ volume }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
      {({ opacity }) => (
        <div style={{ opacity }}>
          <VolumeView volume={volume} />
        </div>
      )}
    </Spring>
  );
};

const VolumeView = ({ volume }) => {
  const { volumeInfo } = volume;
  const {
    title,
    authors,
    publishedDate,
    description,
    pageCount,
    previewLink
  } = volumeInfo;
  return (
    <div className="volumeContainer">
      <div className="volumeCardContainer">
        <div className="volumeContent card">
          <div className="miniHeader">
            <div>
              <CoverImg imageLinks={volumeInfo.imageLinks} maxRes={false} />
            </div>
            <div>
              <h5>{title}</h5>
              <p>{authors[0]}</p>
              <p>Published: {moment(publishedDate).format("Y")}</p>
              <p>{pageCount} pages</p>
              {volumeInfo.categories && (
                <Catagories categories={volumeInfo.categories} />
              )}
            </div>
          </div>
          <div className="description">
            <p dangerouslySetInnerHTML={{ __html: `${description}` }} />
          </div>
          <div>
            <a href={previewLink}>Read Preview at Google Books</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class Volume extends React.Component {
  state = { loading: true };
  async componentDidMount() {
    const id = queryString.parse(this.props.location.search);
    const volume = await getVolume(id.id);
    this.setState({ volume }, () => {
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading, volume } = this.state;
    return <div>{!loading && <RenderVolume volume={volume} />}</div>;
  }
}
