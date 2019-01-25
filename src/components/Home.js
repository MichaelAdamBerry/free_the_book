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
                  <label htmlFor="homeSearch">Search for a book title</label>
                  <input 
                    className="homeSearch"
                    aria-label="Search for a book title"
                    aria-required="true"
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
