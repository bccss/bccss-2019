import React, { Component } from "react";
import styled from "styled-components";

import theme from "../../utils/theme";
import {ReactComponent as HTHLogo} from "../../assets/images/hth-lite.svg";

import SectionContainer from "../../components/common/SectionContainer";
import Banner from "../../components/common/Banner";
import { boardMembers } from "../../utils/boardConfig.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faHeart,
  faGraduationCap,
  faLaptopCode,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  hth: null,
  faPencilAlt: faPalette,
  faHeart: faHeart,
  faGraduationCap: faGraduationCap,
  faLaptopCode: faLaptopCode,
  faUsers: faUsers,
};

const STeamsContainer = styled.div`
  position: relative;
`;

const STeamButtonGroup = styled.div`
  width: 80vw;
  margin: auto;
  padding-top: 5vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const STeamButton = styled.div`
  margin: 25px;
  text-align: center;

  .buttonIcon {
    position: relative;
    background-color: ${theme.mainColor};
    border-radius: 50%;

    transition: transform 250ms ease-out, border 250ms ease-out;
    :hover {
      cursor: pointer;
      transform: scale(1.25) translateY(-3px);
    }

    width: 100px;
    height: 100px;
    transform: ${(props) =>
      props.selected ? "scale(1.25) translateY(-3px)" : "none"};

    text-align: center;
    * {
      transition: color 250ms ease-out;
      color: ${(props) => (props.selected ? theme.secondaryColor : "white")};
      fill: ${(props) => (props.selected ? theme.secondaryColor : "white")};
      margin-top: 25px;
      width: 50px;
      height: 50px;
    }
  }
`;

const STeamGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .members {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const SMember = styled.div`
  margin: 25px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid ${theme.mainColor};
    object-fit: cover;
  }

  h3 {
    text-align: center;
  }
`;

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTeam: "Hackathon" };
  }

  renderTeamButtons = () => {
    let renderedTeamButtons = boardMembers.map((team) => {
      if (team.name === "Hackathon") {
        return (
          <STeamButton
            selected={team.name === this.state.currentTeam}
            onClick={() => this.setState({ currentTeam: team.name })}
          >
            <div className="buttonIcon">
              <HTHLogo/>
            </div>
            <h3>{team.name}</h3>
          </STeamButton>
        );
      } else {
        return (
          <STeamButton
            selected={team.name === this.state.currentTeam}
            onClick={() => this.setState({ currentTeam: team.name })}
          >
            <div className="buttonIcon">
              <FontAwesomeIcon icon={iconMap[team.icon]} />
            </div>
            <h3>{team.name}</h3>
          </STeamButton>
        );
      }
    });
    return renderedTeamButtons;
  };

  renderTeam = (teamObj) => {
    const teamMembers = teamObj.members.map((member) => {
      return (
        <SMember>
          <img src={member.img} alt={member.name} />
          <h3>{member.name}</h3>
        </SMember>
      );
    });

    if (this.state.currentTeam === teamObj.name) {
      return (
        <STeamGroup>
          {/* <h1>{teamObj.name}</h1> */}
          <div className="members">{teamMembers}</div>
        </STeamGroup>
      );
    }
  };

  render() {
    let renderedTeamButtons = this.renderTeamButtons();

    let renderedTeams = boardMembers.map((team) => {
      return this.renderTeam(team);
    });
    return (
      <SectionContainer>
        <Banner position="right">
          <div className="banner">
            <h1>Our Team</h1>
          </div>
        </Banner>

        <STeamButtonGroup>{renderedTeamButtons}</STeamButtonGroup>
        <STeamsContainer>{renderedTeams}</STeamsContainer>
      </SectionContainer>
    );
  }
}

export { Team };
