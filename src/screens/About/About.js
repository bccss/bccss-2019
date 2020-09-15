import React, { Component } from "react";
import styled from "styled-components";

import theme from "../../utils/theme";
import Banner from "../../components/common/Banner";
import SectionContainer from "../../components/common/SectionContainer";
import HTH from "../../assets/images/HTH.svg";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLaptopCode,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const AboutContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;

  .item {
    text-align: center;

    .description {
      margin-top: 25px;
      width: 300px;
      position: relative;
    }
  }
`;

const Mission = styled.p`
  text-align: center;
  font-size: 48px;
  padding: 0 10% 0 10%;
  color: #444444;
`;

const CircleIcon = styled.div`
  position: relative;
  margin: auto;
  background-color: ${theme.mainColor};
  border-radius: 50%;

  width: 200px;
  height: 200px;

  text-align: center;

  * {
    color: ${theme.secondaryColor};
    margin-top: 50px;
    font-size: 75px;
  }
`;

class About extends Component {
  render() {
    return (
      <SectionContainer color="#ffffff">
        <Banner position="right">
          <div className="banner">
            <h1> About BCCSS </h1>
          </div>
        </Banner>
        <Mission> The Boston College Computer science society aims to foster an inclusive tech community for students of all majors to develop their coding skills, encourage each other to make their ideas come to life, and help students navigate through their career journey. </Mission>
        <AboutContainer>
          <div className="item">
            <CircleIcon>
              <FontAwesomeIcon icon={faUsers} />
            </CircleIcon>
            <h1> Events </h1>
            <p className="description">
            The community team is here to help students connect with alumni, faculty and fellow technologists in the BC community. This semester we’re holding virtual events to help provide an environment where the CS community can comfortably network and interact with one another.
            </p>
          </div>
          <div className="item">
            <CircleIcon>
              <FontAwesomeIcon icon={faGraduationCap} />
            </CircleIcon>
            <h1> Workshops </h1>
            <p className="description">
              We organize informative community workshops and project nights for students of
              all experience levels to build and learn new skills. Join us for topics such as collaborative project management on GitHub, basic iOS development in Swift, and advanced machine learning applications.
            </p>
          </div>
          <div className="item">
            <CircleIcon>
              <img src={HTH} width="60%" style={{marginTop : 30}}/>
            </CircleIcon>
            <h1> Hackathons </h1>
            <p className="description">
                We are excited to introduce Boston College's fifth 24-hour hackathon! Hack the Heights is going completely virtual this year! It will feature virtual technical workshops, tech talks, and prizes for beginners and seasoned hackers alike. The event kicks off on Saturday, November 14 and concludes on Sunday, November 15.
            </p>
          </div>
        </AboutContainer>
      </SectionContainer>
    );
  }
}

export { About };
