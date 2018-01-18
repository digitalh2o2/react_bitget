import React, { Component } from "react";
import Home from "./Home";
import MainPage from "./MainPage";
import View from "./View";
import Nav from "./Nav";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/games" component={MainPage} />
            <Route path="/games/:gameName" component={View} />
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
