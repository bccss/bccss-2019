import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e7e7;
`;

class About extends Component {
  render() {
    return (
      <Container>
        <p>About</p>
      </Container>
    );
  }
}

export { About };
