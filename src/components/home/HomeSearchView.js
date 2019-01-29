import React from "react";
import PropTypes from "prop-types";

const HomeSearchView = ({ actions, query }) => {
  return (
    <div className="homeSearch" data-testid="homeSearch">
      <form onSubmit={actions.submitQuery}>
        <div className="welcomeTitle" data-testid="welcomeTitle">
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
              data-testid="homeSearchInput"
              aria-label="Search for a book title"
              aria-required="true"
              type="text"
              value={query}
              onChange={actions.typeLetter}
            />
            <button data-testid="findBooksBtn" type="submit">
              Find Books
            </button>
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
};

HomeSearchView.propTypes = {
  actions: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired
};

export default HomeSearchView;
