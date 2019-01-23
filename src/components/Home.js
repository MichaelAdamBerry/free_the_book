import React from "react";
import { getVolumes } from "../api/google";
import SearchBox from "./SearchBox";
import RenderList from "./RenderList";
import ListView from "./ListView";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", loading: false, volumes: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({ query: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const volumes = await getVolumes(this.state.query);
    this.setState({ volumes, loading: true });
  }

  renderListView = () => {
    if (this.state.loading === true) {
      return <ListView volumes={this.state.volumes} />;
    } else {
      return null;
    }
  };

  render() {
    const { query } = this.state.query;
    return (
      <div className="main">
        <SearchBox
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={query}
        />
        {this.renderListView()}
      </div>
    );
  }
}
