import React from "react";
import { getVolumeList } from "../../utils/api/google";
import queryString from "query-string";
import Card from "../card/Card";
import PropTypes from "prop-types";
import CardSpring from "./ListCardView";

const ListItem = ({ volume }) => {
  // check to see if book is available for free

  return (
    <Card
      volume={volume}
      volumeInfo={volume.volumeInfo}
      render={({ props }) => {
        return <CardSpring {...props} />;
      }}
    />
  );
};
ListItem.propTypes = {
  volume: PropTypes.object.isRequired
};

export const ListView = ({ volumes }) => {
  return (
    <div data-testid="listWrapper" className="listWrapper">
      {volumes.map((volume, index) => (
        <ListItem volume={volume} key={Math.random() * 10} />
      ))}
    </div>
  );
};

ListView.propTypes = {
  volumes: PropTypes.array.isRequired
};

export default class List extends React.Component {
  state = { loading: true };

  componentDidMount = async () => {
    const query = queryString.parse(this.props.location.search);
    const volumes = await getVolumeList(query.q);
    this.setState({ volumes: volumes, query: query.q }, () => {
      this.setState({ loading: false });
    });
  };

  render() {
    const { loading, volumes } = this.state;
    return (
      <div className="listContainer">
        {!loading && <ListView volumes={volumes} />}
      </div>
    );
  }
}
