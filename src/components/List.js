import React from "react";
import { getVolumeList } from "../api/google";
import queryString from "query-string";
import Card from "./Card";
import { Spring } from "react-spring";

function ListItem({ volume }) {
  const delay = Math.floor(Math.random() * 2000 + 500);
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={delay}>
      {({ opacity }) => (
        <div style={{ opacity }} className="column">
          <Card volume={volume} />
        </div>
      )}
    </Spring>
  );
}

function ListView({ volumes }) {
  const middleIndex = Math.floor(volumes.length / 2);
  const colA = volumes.slice(0, middleIndex);
  const colB = volumes.slice(middleIndex);
  return (
    <div className="listWrapper">
      {colA.map((element, index) => {
        return (
          <div className="row">
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
}

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, volumes: null, error: null, query: null };
  }

  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const volumes = await getVolumeList(query.q);
    this.setState({ volumes: volumes, query: query.q }, () => {
      this.setState({ loading: false });
    });
  }
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
