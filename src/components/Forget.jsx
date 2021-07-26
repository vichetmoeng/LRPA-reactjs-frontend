import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Forget extends Component {
  state = {
    email: "",
    message: "",
  };

  // Forget Password form submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };

    axios
      .post("/forget-password", data)
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        document.getElementById("forgetform").reset()
      })
      .catch((error) => {
        this.setState({
          message: error.response.data.message,
        });
      });
  };
  render() {
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

    return (
      <div className="container h-100 pt-5">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-6">
            <div className="card text-center">
              <div className="card-header">Forget Password</div>
              <div className="card-body">
                <form onSubmit={this.formSubmit} id="forgetform">
                    {error}
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      type="email"
                      placeholder="Email address"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-2"
                  >
                    Forget Password
                  </button>
                </form>
              </div>
              <div className="card-footer text-muted">
                Copyright@ {new Date().getFullYear()} |{" "}
                <a href="https://github.com/vichetmoeng">Moeng Vichet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forget;
