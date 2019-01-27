import React from "react";
import queryString from "query-string";
import { getVolume } from "../api/google";
import CoverImg from "./CoverImg";
import moment from "moment";

//TODO handle error if no catagories exist

function VolumeView({ volume }) {
  const { volumeInfo, averageRating } = volume;
  const {
    title,
    authors,
    categories,
    publishedDate,
    description,
    pageCount
  } = volumeInfo;

  console.log("authors ", authors);

  console.log("average rating is ", averageRating);
  return (
    <div
      className="volumeContainer"
      style={{
        backgroundImage:
          "url(https://cdn5.teebooks.com/3611-thickbox_default/bookshelves-u-set-of-6.jpg?_ga=2.14652146.43169510.1548520510-1695472323.1548520510&_gac=1.115906804.1548520510.Cj0KCQiAp7DiBRDdARIsABIMfoCTQ5fz-1VPkGuMO2mY6l6mHSByDcuxX2cXho97IYXJlpHZl5i9fEgaAhcPEALw_wcB)"
      }}>
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
            <p>
              {categories.map(e => (
                <span>{e} </span>
              ))}
            </p>
          </div>
        </div>
        <div className="description">
          <p dangerouslySetInnerHTML={{ __html: `${description}` }} />
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
    return <div>{!loading && <VolumeView volume={volume} />}</div>;
  }
}
