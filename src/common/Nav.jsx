import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

class Nav extends Component {

  state = {
    loggedout: ''
  }

  logout = () => {
    localStorage.clear();
    this.props.setUser();
  }

  render() {
    let buttons;
    let profile;
    if (localStorage.getItem("token")) {
      buttons = (
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/" onClick={this.logout}>
                Logout
              </NavLink>
            </li>
          </ul>
          
        </div>
      );
      profile = (
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/profile">
            Profile
          </NavLink>
        </li>
      );
    } else {
      buttons = (
        <div>
          <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
        </div>
      )
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <NavLink
            className="navbar-brand"
            to="/"
            title="Laravel ReactJS Passport Authentication"
          >
            <h1>LRPA</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active"  to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                {profile}
              </li>
            </ul>
            <span className="navbar-text">
              {buttons}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
