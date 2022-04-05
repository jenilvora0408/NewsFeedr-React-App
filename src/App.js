import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Business">
              <News
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/General">
              <News
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Health">
              <News key="health" pageSize={5} country="in" category="health" />
            </Route>
            <Route exact path="/Science">
              <News
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/Sports">
              <News key="sports" pageSize={5} country="in" category="sports" />
            </Route>
            <Route exact path="/Technology">
              <News
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
