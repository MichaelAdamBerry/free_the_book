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
  return (
    <div data-testid="listWrapper" className="listWrapper">
      {volumes.map(volume => (
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
    const { history } = this.props;
    const volumes = await getVolumeList(query.q);
    //handle no results from google
    if (volumes === false) {
      console.warn("the query string did not return any results from google");
      history.replace({ pathname: "/", state: { error: true } });
    } else {
      this.setState({ volumes: volumes, query: query.q }, () => {
        this.setState({ loading: false, noResults: false });
      });
    }
  };

  render() {
    const { volumes, noResults, loading } = this.state;
    return (
      <div className="listContainer">
        {!loading && <ListView volumes={volumes} noResults={noResults} />}
      </div>
    );
  }
}
