import React, { Component } from "react";
import styled from "styled-components";
import { EventCard } from "../../components";

import FlyingBirds from "./FlyingBirds";

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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid black;
`;

const Button = styled.button`
  background-color: #ffdd57;
  padding: 10px 20px;
  color: white;
  border: 0px;
  border-radius: 20px;
  margin-top: 10px;
`;

const EventCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <FlyingBirds />
        <HeaderText>Boston College</HeaderText>
        <SubtitleText>Computer Science Society</SubtitleText>
        <EventCardContainer>
          <EventCard />
        </EventCardContainer>
        <InputContainer>
          <EmailInput placeholder="Email" />
          <Button>Join</Button>
        </InputContainer>
      </Container>
    );
  }
}

export { Home };
