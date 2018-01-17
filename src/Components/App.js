import React, { Component } from "react";
import MainPage from "./MainPage";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route
              render={function() {
                return <p>Not Found </p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
