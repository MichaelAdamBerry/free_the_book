import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <h3 className="siteTitle">Find Your Next Book</h3>
      <Search
        render={({ actions, query }) => {
          return (
            <div className="headerSearch">
              <form onSubmit={actions.submitQuery}>
                <label htmlFor="headerSearch">Search for a book title</label>
                <input
                  className="headerSearch"
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
};

export default Header;