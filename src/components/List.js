import React from "react";

import { getVolumes } from "../api/google";
import queryString from "query-string";

function ListView({ volumes }) {
  return (
    <ul>
      {volumes.map(volume => (
        <li key={volume.id}>{volume.volumeInfo.title}</li>
      ))}
    </ul>
  );
}
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, volumes: null, error: null };
  }

  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const volumes = await getVolumes(query.q);
    this.setState({ volumes: volumes }, () => {
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading, volumes } = this.state;
    return <div>{!loading && <ListView volumes={volumes} />}</div>;
  }
}
