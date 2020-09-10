import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Resources extends Component {
  render() {
    return (
      <Container>
        <p>Resources</p>
      </Container>
    );
  }
}

export { Resources };