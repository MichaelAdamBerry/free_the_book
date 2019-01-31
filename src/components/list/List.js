import React from "react";
import { getVolumeList } from "../../utils/api/google";
import queryString from "query-string";
import Card from "../card/Card";
import PropTypes from "prop-types";
import CardSpring from "./ListCardView";

const ListItem = ({ volume }) => {
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
  //slice search result array into two columns for rendering into rows with flex
  const middleIndex = Math.floor(volumes.length / 2);
  const colA = volumes.slice(0, middleIndex);
  const colB = volumes.slice(middleIndex);
  return (
    <div data-testid="listWrapper" className="listWrapper">
      {colA.map((element, index) => {
        return (
          <div className="row" key={Math.random() * 1000}>
            <div className="column">
              <ListItem volume={element} />
            </div>
            <div className="column">
              <ListItem volume={colB[index]} />
            </div>
          </div>
        );
      })}
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
    const { loading, volumes, query } = this.state;
    return (
      <div className="listContainer">
        {!loading && <ListView volumes={volumes} />}
      </div>
    );
  }
}
