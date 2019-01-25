import React from "react";
import { withRouter } from "react-router";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ query: value });
  }

  handleSubmit = event => {
    const history = this.props.history;
    event.preventDefault();
    history.replace({
      pathname: `/list`,
      search: `?q=${this.state.query}`
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
