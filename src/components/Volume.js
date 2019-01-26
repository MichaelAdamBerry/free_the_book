import React from "react";
import queryString from "query-string";
import { getVolume } from "../api/google";
import CoverImg from "./CoverImg";

//TODO handle error if image doesn't exist

function VolumeView({ volume }) {
  const { volumeInfo, averageRating } = volume;
  const { title, authors, publishedDate, description, pageCount } = volumeInfo;

  console.log("authors ", authors);

  console.log("average rating is ", averageRating);
  return (
    <div>
      <h5>{title}</h5>
      <p>Published: {publishedDate}</p>
      <p>{pageCount}</p>
      <p>{averageRating}</p>
      <p dangerouslySetInnerHTML={{ __html: `${description}` }} />
      <CoverImg volumeInfo={volumeInfo} maxRes={true} />
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
