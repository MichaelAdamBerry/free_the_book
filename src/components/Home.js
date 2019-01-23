import React from "react";
import SearchBox from "./SearchBox";
import { Redirect } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", submitted: false, volumes: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({ query: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    const { query, submitted } = this.state;

    return (
      <div className="main">
        <SearchBox
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={query}
        />
        {!submitted === false && (
          <Redirect to={{ pathname: `/list`, search: `q=${query}` }} />
        )}
      </div>
    );
  }
}
