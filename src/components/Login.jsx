import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Login extends Component {

    state = {
        email: '',
        password: '',
        message: ''
    }

    // Login form submit
    formSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/login', data)
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            this.setState({
                loggedIn: true
            })
            this.props.setUser(response.data.user)
            this.setState({
                message: response.data.message,
              });
        }).catch((error) => {
            this.setState({
                message: error.response.data.message,
              });
        });
    }

  render() {

    // after login redirect to profile
    if(this.state.loggedIn) {
        return <Redirect to={'/profile'} />
    }

    // show error message
    let error = "";
    if (this.state.message) {
      error = (
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {this.state.message}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      )
    }

    if(localStorage.getItem('token')) {
        return <Redirect to={'/profile'} />
      }

    return (
      <div className="container h-100 pt-5">
        <div className="row h-100 justify-content-center align-items-center">
            <div className="col-6">
                <div className="card text-center">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        
                        <form onSubmit={this.formSubmit}>
                        {error}
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" required onChange={(e) => {this.setState({email:e.target.value})}} name="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" required onChange={(e) => {this.setState({password:e.target.value})}} name="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-block mb-2">Login</button>
                            <Link to="/register">Create New Account?</Link> | <Link to="/forget">Forget Password?</Link>
                        </form>

                    

                    </div>
                    <div className="card-footer text-muted">Copyright@ {new Date().getFullYear()} | <a href="https://github.com/vichetmoeng">Moeng Vichet</a></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
