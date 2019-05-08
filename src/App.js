import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
