import React from "react";
import queryString from "query-string";
import { getVolume } from "../api/google";
import CoverImg from "./CoverImg";
import moment from "moment";
import { Spring } from "react-spring";

//TODO handle error if no catagories exist

function Catagories({ categories }) {
  return (
    <p>
      {categories.map(e => (
        <span>{e} </span>
      ))}
    </p>
  );
}

function RenderVolume({ volume }) {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
      {({ opacity }) => (
        <div style={{ opacity }}>
          <VolumeView volume={volume} />
        </div>
      )}
    </Spring>
  );
}

function VolumeView({ volume }) {
  const { volumeInfo, averageRating } = volume;
  const {
    title,
    authors,
    publishedDate,
    description,
    pageCount,
    previewLink
  } = volumeInfo;

  console.log("authors ", authors);

  console.log("average rating is ", averageRating);
  return (
    <div className="volumeContainer">
      <div className="volumeCardContainer">
        <div className="volumeContent card">
          <div className="miniHeader">
            <div>
              <CoverImg volumeInfo={volumeInfo} maxRes={false} />
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
            <a href={previewLink}>Read Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, volume: null };
  }
  async componentDidMount() {
    const id = queryString.parse(this.props.location.search);
    console.log("the id from the string is ", id.id);
    const volume = await getVolume(id.id);
    console.log("volume returned from api request", volume);
    this.setState({ volume: volume }, () => {
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading, volume } = this.state;
    return <div>{!loading && <RenderVolume volume={volume} />}</div>;
  }
}
