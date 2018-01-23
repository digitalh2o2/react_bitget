import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div class="navbar-brand ">
          <div
            class="navbar-burger burger"
            onClick={() => {
              let toggle = document.querySelector(".nav-toggle");
              toggle.classList.toggle("is-active");
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-menu nav-toggle">
          <div className="navbar-item">
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="navlink-item"
            >
              Home
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink
              to="/games"
              activeClassName="active"
              className="navlink-item"
            >
              Games
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink
              to="/about"
              activeClassName="active"
              className="navlink-item"
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
