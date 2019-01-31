import React from "react";
import Search from "../search/Search";
import HomeSearchView from "./HomeSearchView";
import { Spring } from "react-spring";
import Hero from "./Hero";

const HomeView = () => {
  return (
    <div className="home" data-testid="home">
      <Spring
        from={{ height: 100, opacity: 0 }}
        to={{ height: 400, opacity: 1 }}>
        {({ height, opacity }) => <Hero style={{ height, opacity }} />}
      </Spring>
      <Search
        render={({ actions, query }) => {
          return (
            <Spring
              delay={300}
              from={{ height: 100, opacity: 0 }}
              to={{ height: 400, opacity: 1 }}>
              {({ height, opacity }) => (
                <HomeSearchView
                  actions={actions}
                  query={query}
                  style={{ height, opacity }}
                />
              )}
            </Spring>
          );
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
