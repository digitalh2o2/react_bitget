import React, { Component } from "react";
import MainPage from "./MainPage";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <MainPage />
        </div>
      </Router>
    );
  }
}

export default App;
