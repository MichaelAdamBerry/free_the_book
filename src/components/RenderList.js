import React from "react";
import ListView from "./ListView";

export default class RenderList extends React.Component {
  render() {
    const { loading, volumes } = this.props;
    if (loading !== true) {
      return <> </>;
    } else if (loading === true) {
      return <ListView volumes={volumes} />;
    }
  }
}
