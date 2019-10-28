import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const HeaderText = styled.p`
  text-align: center;
  font-size: 48px;
  margin: 25px;
`;

const SubtitleText = styled.p`
  text-align: center;
  font-size: 38px;
  margin: 0px;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <HeaderText>Boston College</HeaderText>
        <SubtitleText>Computer Science Society</SubtitleText>
      </Container>
    );
  }
}

export { Home };
