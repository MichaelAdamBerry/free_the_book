import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import List from "./components/List";
import Volume from "./components/Volume";
import "./App.css";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faStarHalfAlt);

class App extends Component {
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/volume" component={Volume} />
              </Switch>
            </>
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
