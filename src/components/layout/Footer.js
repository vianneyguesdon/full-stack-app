import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

// We use a stateless component here because it's dumb
const Footer = () => (
  <Container className="bg-dark text-white mt-5 p-4 text-center">
    Copyright &copy; {new Date().getFullYear()} Skilters
  </Container>
);

export default Footer;
