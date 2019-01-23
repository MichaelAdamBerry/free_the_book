import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import { getVolumes } from "./api/google";
class App extends Component {
  render() {
    async function logdata() {
      const booksOnFamily = await getVolumes("family");
      return booksOnFamily;
    }
    const data = logdata();
    console.log(data);

    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
