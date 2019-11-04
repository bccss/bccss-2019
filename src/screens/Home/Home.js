import React, { Component } from "react";
import Typing from "react-typing-animation";
import styled from "styled-components";
import { EventCard } from "../../components";

import FlyingBirds from "./FlyingBirds";
import Background from "./Background";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: relative;
`;

const HeaderText = styled.p`
  text-align: center;
  font-size: 72px;
  /* margin: 50px; */
`;

const SubtitleText = styled.p`
  font-family: "Press Start 2P", cursive;
  text-align: center;
  font-size: 42px;
  /* margin: 25px 25px 50px; */
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 125px;
  width: 100%;
`;

const EmailInput = styled.input`
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid black;
  font-size: 22px;
`;

const Button = styled.button`
  background-color: #ffdd57;
  padding: 8px 45px;
  color: white;
  border: 0px;
  border-radius: 40px;
  margin-top: 15px;
  font-size: 22px;

  :hover {
    cursor: pointer;
  }
`;

const EventCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        {/* <FlyingBirds /> */}
        {/* <Background /> */}
        <HeaderText>Boston College</HeaderText>
        <Typing speed={100}>
          <SubtitleText>{"       "}</SubtitleText>
          <Typing.Delay ms={800} />
          <SubtitleText>Computer Science Society</SubtitleText>
          <Typing.Delay ms={100000} />
        </Typing>
        <EventCardContainer>
          <EventCard />
        </EventCardContainer>
        <InputContainer>
          <EmailInput placeholder="student@bc.edu" />
          <Button>Join</Button>
        </InputContainer>
      </Container>
    );
  }
}

export { Home };
