import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/layout/Dashboard";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

const Container = styled.div`
  height: 100vh;
`;

// Check for token
if (localStorage.jwToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwToken);
  // Set user and isAthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout the user
    store.dispatch(logoutUser());

    //Redirect to login
    window.location.href = "./login";
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Footer />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
