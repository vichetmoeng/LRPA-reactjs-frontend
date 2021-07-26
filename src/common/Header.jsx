import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Profile from "../components/Profile";
import axios from "axios";
import Reset from "../components/Reset";

class Header extends Component {

    state = {
        user: {}
    }

    componentDidMount() {

        // Logged User data
        axios.get('/user')
        .then((response) => {
            this.setUser(response.data)
        }).catch((error) => {
            console.log(error)
        });
    }

    setUser = (userdatafromserver) => {
        this.setState({user:userdatafromserver})
    }

  render() {
    return (
      <Router>
        <div>
          <Nav user={this.state.user} setUser={this.setUser} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={ () => <Login user={this.state.user} setUser={this.setUser} />}  />
            <Route exact path="/register" component={ () => <Register user={this.state.user} setUser={this.setUser} />} />
            <Route exact path="/forget" component={Forget} />
            <Route exact path="/reset/:id" component={Reset} />
            <Route exact path="/profile" component={ () => <Profile user={this.state.user} setUser={this.setUser} /> } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
