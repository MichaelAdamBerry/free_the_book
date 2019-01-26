import React from "react";
import { getVolumeList } from "../api/google";
import queryString from "query-string";
import Card from "./Card";
import { Spring } from "react-spring";

function ListView({ volumes }) {
  return (
    <ul>
      {volumes.map(volume => (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {({ opacity }) => (
            <div style={{ opacity }} className="cardContainer">
              <li key={volume.id}>
                <Card volume={volume} />
              </li>
            </div>
          )}
        </Spring>
      ))}
    </ul>
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
