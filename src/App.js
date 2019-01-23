import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Volume from "./components/Volume";
import "./App.css";
import { getVolumeList } from "./api/google";
class App extends Component {
  render() {
    async function logdata() {
      const booksOnFamily = await getVolumeList("family");
      return booksOnFamily;
    }
    const data = logdata();
    console.log(data);

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/volume" component={Volume} />
        </Switch>
      </Router>
    );
  }
}

export default App;
