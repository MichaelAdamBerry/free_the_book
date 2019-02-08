import React from "react";
import { withRouter } from "react-router";

class Search extends React.Component {
  state = { query: "", noTextSubmit: false };

  handleChange = event => {
    const value = event.target.value;
    const validate = value === "";
    this.setState({ query: value, noTextSubmit: validate });
  };

  handleSubmit = event => {
    const { history } = this.props;
    const { query, noTextSubmit } = this.state;
    event.preventDefault();
    if (noTextSubmit) {
      return;
    }
    history.push({
      pathname: `/list`,
      search: `?q=${query}`
    });
  };

  getActions = () => {
    return {
      submitQuery: this.handleSubmit,
      typeLetter: this.handleChange
    };
  };

  render() {
    return this.props.render({ ...this.state, actions: this.getActions() });
  }
}

export default withRouter(Search);
