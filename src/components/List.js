import React from "react";

import { getVolumeList } from "../api/google";
import queryString from "query-string";
import { Link } from "react-router-dom";

function ListView({ volumes }) {
  return (
    <ul>
      {volumes.map(volume => (
        <li key={volume.id}>
          <Link to={{ pathname: "/volume", search: `id=${volume.id}` }}>
            {volume.volumeInfo.title}
          </Link>
        </li>
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
    const volumes = await getVolumeList(query.q);
    this.setState({ volumes: volumes }, () => {
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading, volumes } = this.state;
    return <div>{!loading && <ListView volumes={volumes} />}</div>;
  }
}
