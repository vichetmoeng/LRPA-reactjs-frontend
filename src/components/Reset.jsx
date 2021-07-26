import axios from "axios";
import React, { Component } from "react";

class Reset extends Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    pincode: "",
    message: "",
  };

  // Reset Password form submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      token: this.state.pincode,
    };

    axios
      .post("/reset-password", data)
      .then((response) => {
        
        this.setState({
            message: response.data.message,
          });
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
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
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
      );
    }
    return (
      <div className="container h-100 pt-5">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-6">
            <div className="card text-center">
              <div className="card-header">Reset Password</div>
              <div className="card-body">
                <form onSubmit={this.formSubmit}>
                    {error}
                  <div className="form-group">
                    <label for="exampleInputEmail1">PIN code</label>
                    <input
                      type="text"
                      required
                      onChange={(e) => {
                        this.setState({ pincode: e.target.value });
                      }}
                      name="pincode"
                      placeholder="PIN code"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      required
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      name="email"
                      placeholder="Email address"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">New Password</label>
                    <input
                      type="password"
                      required
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                      name="password"
                      placeholder="New Password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword2">
                      New Password Comformation
                    </label>
                    <input
                      type="password"
                      required
                      onChange={(e) => {
                        this.setState({
                          password_confirmation: e.target.value,
                        });
                      }}
                      name="password"
                      placeholder="New Password Confirmation"
                      className="form-control"
                      id="exampleInputPassword2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-2"
                  >
                    Reset
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

export default Reset;
