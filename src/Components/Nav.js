import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-item">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="navbar-item">
          <NavLink to="/games">Games</NavLink>
        </div>
        <div className="navbar-item">
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
