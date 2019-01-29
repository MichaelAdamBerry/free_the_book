import React from "react";
import { getVolumeList } from "../api/google";
import queryString from "query-string";
import Card from "./Card";
import { Spring } from "react-spring";
import PropTypes from "prop-types";

const ListItem = ({ volume }) => {
  //list items to fade in at random intervals from 0 to 2000ms
  const delay = Math.floor(Math.random() * 2000);
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={delay}>
      {({ opacity }) => (
        <div style={{ opacity }} className="column">
          <Card volume={volume} />
        </div>
      )}
    </Spring>
  );
};

ListItem.propTypes = {
  volume: PropTypes.object.isRequired
};

const ListView = ({ volumes }) => {
  //slice search result array into two columns for rendering into rows with flex
  const middleIndex = Math.floor(volumes.length / 2);
  const colA = volumes.slice(0, middleIndex);
  const colB = volumes.slice(middleIndex);
  return (
    <div className="listWrapper">
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
        <h3>Search results for {query}:</h3>
        {!loading && <ListView volumes={volumes} />}
      </div>
    );
  }
}
