import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import axios from "axios";

const LoginContainer = styled.div`
  min-height: 72vh;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/api/users/login", user)
      .then(res => console.log(res.data))
      .catch(err =>
        this.setState({
          errors: err.response.data
        })
      );
  }

  render() {
    const { errors } = this.state;

    return (
      <LoginContainer className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your Skilters account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classNames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classNames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </LoginContainer>
    );
  }
}

export default Login;
