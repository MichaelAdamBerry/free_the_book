import React from "react";
import Search from "../search/Search";
import HomeSearchView from "./HomeSearchView";

const HomeView = () => {
  return (
    <div className="home" data-testid="home">
      <h3>Find a good book</h3>
      <Search
        render={({ actions, query }) => {
          return <HomeSearchView actions={actions} query={query} />;
        }}
      />
    </div>
  );
};

export default class Home extends React.Component {
  render() {
    return <HomeView />;
  }
}
