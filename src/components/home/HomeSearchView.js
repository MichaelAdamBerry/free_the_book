import React from "react";
import PropTypes from "prop-types";

export const Button = ({ onClick }) => {
  return (
    <button data-testid="findBooksBtn" type="submit" onClick={onClick}>
      Find Books
    </button>
  );
};

const HomeSearchView = ({ actions, query, style }) => {
  return (
    <div className="homeSearch" data-testid="homeSearch" style={style}>
      <form onSubmit={actions.submitQuery}>
        <div className="welcomeTitle" data-testid="welcomeTitle">
          <h4>Enter a Title to Get Started</h4>
        </div>
        <div>
          <div className="textArea">
            <label htmlFor="search-input">Title: </label>
            <input
              className="homeSearch"
              id="search-input"
              name="search-input"
              aria-required="true"
              type="text"
              value={query}
              onChange={actions.typeLetter}
            />
            <Button onClick={actions.submitQuery} />
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
