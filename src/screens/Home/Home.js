import React, { Component } from "react";
import Typing from "react-typing-animation";
import styled from "styled-components";
import Wave1Src from "../../assets/images/Wave1.svg";
import Wave2Src from "../../assets/images/Wave2.svg";
import GassonSrc from "../../assets/images/Gasson.svg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("https://www.bc.edu/content/dam/bc1/offices/Alumni/sites/landing-pages/bc-zoom-backgrounds/zoom-bg-3.jpg");
  box-shadow: 0 0 500px black inset;
  background-size: 100% auto;
  margin: 0;
  padding: 0;
`;

const HeaderText = styled.p`
  text-align: center;
  font-size: 100px;
  margin: 0;
  padding: 0;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 500;
  padding-top: 150px;
  color: white;
  /* margin: 50px; */
`;

const SubtitleText = styled.p`
  text-align: center;
  font-size: 54px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 300;
  margin: 0;
  color: #dccaa0;
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

const Gasson = styled.img`
  margin-bottom: -20px;
`;

const EmailInput = styled.input`
  padding: 10px 35px;
  border-radius: 35px;
  border: 4px solid #dccaa0;
  background-color: white;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #dccaa0;
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

const WaveContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Wave1 = styled.img`
  position: absolute;
  right: 0;
`;

const Wave2 = styled.img`
  z-index: 1;
  position: absolute;
  left: 0;
  bottom: -150px;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <WaveContainer>
          <Wave1 src={Wave1Src} /> <Wave2 src={Wave2Src} />{" "}
        </WaveContainer>{" "}
        <HeaderText> Boston College </HeaderText>{" "}
        <Typing speed={100}>
          <SubtitleText> {"       "} </SubtitleText> <Typing.Delay ms={800} />{" "}
          <SubtitleText> Computer Science Society </SubtitleText>{" "}
          <Typing.Delay ms={100000} />{" "}
        </Typing>{" "}
        <form
          action="http://bcskills.us4.list-manage.com/subscribe/post"
          method="POST"
        >
          <InputContainer>
            <Gasson src={GassonSrc} />{" "}
            <EmailInput
              type="email"
              placeholder="student@bc.edu"
              autocapitalize="off"
              autocorrect="off"
            />
            <Button type="submit" name="subscribe">
              Join{" "}
            </Button>{" "}
          </InputContainer>{" "}
          <input type="hidden" name="u" value="1b70be498004c115d153aaeeb" />
          <input type="hidden" name="id" value="59bdfc55c0" />
        </form>{" "}
      </Container>
    );
  }
}

export { Home };