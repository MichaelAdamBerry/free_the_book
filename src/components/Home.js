import React from "react";
import Search from "./Search";

export default class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <h3>Find a good book</h3>
        <Search
          render={({ actions, query }) => {
            return (
              <div className="homeSearch">
                <form onSubmit={actions.submitQuery}>
                  <input
                    type="text"
                    value={query}
                    onChange={actions.typeLetter}
                  />
                </form>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
