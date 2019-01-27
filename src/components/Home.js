import React from "react";
import Search from "./Search";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h3>Find a good book</h3>
        <Search
          render={({ actions, query }) => {
            return (
              <div className="homeSearch">
                <form onSubmit={actions.submitQuery}>
                  <div className="welcomeTitle">
                    <h4>Welcome to free the book</h4>
                  </div>

                  <div>
                    <div>
                      <p>Enter a book title to get started</p>
                    </div>
                    <div className="textArea">
                      <label htmlFor="homeSearch">Title: </label>
                      <input
                        className="homeSearch"
                        aria-label="Search for a book title"
                        aria-required="true"
                        type="text"
                        value={query}
                        onChange={actions.typeLetter}
                      />
                      <button type="submit">Find Books</button>
                    </div>
                  </div>
                  <div className="sources">
                    <p>Powered by google books</p>
                    <span />
                    <p>Crafted with React.js</p>
                    <span />
                  </div>
                </form>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
