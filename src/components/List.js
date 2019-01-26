import React from "react";
import { getVolumeList } from "../api/google";
import queryString from "query-string";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import CoverImg from "./CoverImg";

function ListView({ volumes }) {
  return (
    <ul>
      {volumes.map(volume => (
        <div className="cardContainer">
          <li key={volume.id}>
            <div className="card">
              <Link to={{ pathname: "/volume", search: `id=${volume.id}` }}>
                <div>
                  <h4>{volume.volumeInfo.title}</h4>
                  <h5>by {volume.volumeInfo.authors[0]}</h5>
                  <div className="thumbnailContainer">
                    <CoverImg volumeInfo={volume.volumeInfo} maxRes={false} />
                  </div>
                  <div className="stars">
                    <span>
                      {volume.volumeInfo.averageRating && (
                        <Stars
                          averageRating={volume.volumeInfo.averageRating}
                        />
                      )}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        </div>
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
