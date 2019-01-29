import React from "react";
import queryString from "query-string";
import { getVolume } from "../../utils/api/google";
import { Spring } from "react-spring";
import Card from "../card/Card";
import VolumeCardView from "./VolumeCardView";

const RenderVolume = ({ volume }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
      {({ opacity }) => (
        <div style={{ opacity }}>
          <Card
            volume={volume}
            volumeInfo={volume.volumeInfo}
            render={({ props }) => {
              return <VolumeCardView {...props} />;
            }}
          />
        </div>
      )}
    </Spring>
  );
};

export default class Volume extends React.Component {
  state = { loading: true };
  async componentDidMount() {
    const urlStr = queryString.parse(this.props.location.search);
    const volume = await getVolume(urlStr.id);
    this.setState({ volume }, () => {
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading, volume } = this.state;
    return <div>{!loading && <RenderVolume volume={volume} />}</div>;
  }
}
