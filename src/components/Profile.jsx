import React, { Component } from "react";

class Profile extends Component {
  render() {

    let name;
    let email;
    if (this.props.user){
      name = this.props.user.name;
      email = this.props.user.email;
    }

    return (
      <div>
        <div className="container h-100 pt-5">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-6">
              <div className="card text-center">
                <div className="card-header">User Profile</div>
                <div className="card-body">
                  
                    <ul className="list-group">
                        <li className="list-group-item">Name: <strong className="text-success">{ name }</strong> </li>
                        <li className="list-group-item">Email: <strong className="text-danger">{ email }</strong> </li>
                    </ul>
                </div>
                <div className="card-footer text-muted">
                  Copyright@ {new Date().getFullYear()} |{" "}
                  <a href="https://github.com/vichetmoeng">Moeng Vichet</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
