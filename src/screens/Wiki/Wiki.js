import React, { Component } from "react";
import styled from "styled-components";
import theme from "../../utils/theme";

import Banner from "../../components/common/Banner";
import SectionContainer from "../../components/common/SectionContainer";
import Gasson from "../../assets/images/gasson2.png";
import Boston from "../../assets/images/boston.png";

const Container = styled.div`
  position: relative;
  width: 100vw;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.div`
  background-color: ${theme.mainColor};
  border-radius: 25px;
  border: 5px solid ${theme.secondaryColor};
  height: 300px;
  width: 500px;
  position: relative;
  display: flex;
  margin: 50px;
  justify-content: space-evenly;
  align-items: center;

  transition: transform 250ms ease-out, border 250ms ease-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  :hover img {
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }

  :hover div {
    opacity: 50%;
  }

  :hover p {
    opacity: 100%;
  }

  img {
    height: 275px;
    width: 475px;
    transition: 250ms filter linear, 250ms -webkit-filter linear;
  }
`;

const Screen = styled.div`
  background-color: #cccccc;
  opacity: 0%;
  border-radius: 20px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  position: absolute;

  transition: 250ms opacity linear;

`;

const Title = styled.p`
  top: 40px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0%;
  margin: 0;
  transition: 250ms opacity linear;
  color: #111111;

  position: absolute;
  font-size: 5em;
  text-align: center;
`;

class Wiki extends Component {
  render() {
    return (
      <SectionContainer color="#fffbf8">
        <Banner position="left">
          <div className="banner">
            <h1>Resource Wiki (Coming soon)</h1>
          </div>
        </Banner>
        <Container>
          <Button>
            <img src={Gasson}></img>
            <Screen></Screen>
            <Title>Courses</Title>
          </Button>
          <Button>
            <img src={Boston}></img>
            <Screen></Screen>
            <Title>Careers</Title>
          </Button>
        </Container>
      </SectionContainer>
    );
  }
}

export { Wiki };
