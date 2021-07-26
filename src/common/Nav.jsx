import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
              <Link className="nav-link" to="/" onClick={this.logout}>
                Logout
              </Link>
            </li>
          </ul>
          
        </div>
      );
      profile = (
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
      );
    } else {
      buttons = (
        <div>
          <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
        </div>
      )
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <Link
            className="navbar-brand"
            to="/"
            title="Laravel ReactJS Passport Authentication"
          >
            <h1>LRPA</h1>
          </Link>
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
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
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
