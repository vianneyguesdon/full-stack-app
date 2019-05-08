import React from "react";
import { Link } from "react-router-dom";
import bitcoin from "../../img/bitcoin.png";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Skilters Awesome App</h1>
                <p className="lead">
                  {" "}
                  Discover if I'm the right person for this intership
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
                <img src={bitcoin} alt="bitcoin" className="btc-png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
