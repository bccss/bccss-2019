import React, { Component } from "react";
import styled from "styled-components";

import theme from "../../utils/theme";
import Banner from "../../components/common/Banner";
import SectionContainer from "../../components/common/SectionContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaceOfWorship,
  faPencilAlt,
  faHeart,
  faGraduationCap,
  faLaptopCode,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
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

const CircleIcon = styled.div`
  position: relative;
  margin: auto;
  background-color: ${theme.mainColor};
  border-radius: 50%;

  transition: transform 250ms ease-out, border 250ms ease-out;
  :hover {
    cursor: pointer;
    transform: scale(1.025);
  }

  width: 200px;
  height: 200px;

  text-align: center;

  * {
    transition: color 250ms ease-out;
    color: white;
    :hover {
      color: ${theme.secondaryColor};
    }
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
            <h1>About BCCSS</h1>
          </div>
        </Banner>
        <AboutContainer>
          <div className="item">
            <CircleIcon>
              <FontAwesomeIcon icon={faUsers} />
            </CircleIcon>
            <h1>Events</h1>
            <p className="description">
              We organize tech talks with interesting developers and
              programmers.
            </p>
          </div>
          <div className="item">
            <CircleIcon>
              <FontAwesomeIcon icon={faLaptopCode} />
            </CircleIcon>
            <h1>Workshops</h1>
            <p className="description">
              We organize workshops and monthly project nights for students of
              all skill levels to build and learn new skills.
            </p>
          </div>
          <div className="item">
            <CircleIcon>
              <FontAwesomeIcon icon={faPlaceOfWorship} />
            </CircleIcon>
            <h1>Hackathons</h1>
            <p className="description">
              We sometimes hit the road and go to hackathons at other colleges.
              Join us.
            </p>
          </div>
        </AboutContainer>
        <div>3 circles: Events | Workshop | Hackathons</div>
      </SectionContainer>
    );
  }
}

export { About };
