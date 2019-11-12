import React, { Component } from "react";
import styled from "styled-components";

const boardMembers = [
  {
    name: "HTH",
    members: [
      { name: "John", img: "http://via.placeholder.com/150x150" },
      { name: "Talia", img: "http://via.placeholder.com/150x150" },
      { name: "Jaq", img: "http://via.placeholder.com/150x150" },
      { name: "Megan", img: "http://via.placeholder.com/150x150" },
      { name: "Joy", img: "http://via.placeholder.com/150x150" },
      { name: "Sean", img: "http://via.placeholder.com/150x150" },
      { name: "Daniel", img: "http://via.placeholder.com/150x150" }
    ]
  },
  {
    name: "Community",
    members: [
      { name: "Brian", img: "http://via.placeholder.com/150x150" },
      { name: "Peter", img: "http://via.placeholder.com/150x150" },
      { name: "Nathan", img: "http://via.placeholder.com/150x150" }
    ]
  },
  {
    name: "Outreach",
    members: [
      { name: "Lindsay", img: "http://via.placeholder.com/150x150" },
      { name: "Hannah", img: "http://via.placeholder.com/150x150" }
    ]
  },
  {
    name: "Scholars",
    members: [
      { name: "Jolene", img: "http://via.placeholder.com/150x150" },
      { name: "Will", img: "http://via.placeholder.com/150x150" }
    ]
  },
  {
    name: "Tech",
    members: [
      { name: "Roger", img: "http://via.placeholder.com/150x150" },
      { name: "Subraiz", img: "http://via.placeholder.com/150x150" },
      { name: "Gina", img: "http://via.placeholder.com/150x150" },
      { name: "Jeff", img: "http://via.placeholder.com/150x150" },
      { name: "Andres", img: "http://via.placeholder.com/150x150" }
    ]
  },
  {
    name: "Design",
    members: [
      { name: "Immalla", img: "http://via.placeholder.com/150x150" },
      { name: "Adrianna", img: "http://via.placeholder.com/150x150" },
      { name: "Jack", img: "http://via.placeholder.com/150x150" }
    ]
  }
];

const STeam = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(240, 240, 240);
  border: 1px black solid;
`;

const STeamButtonGroup = styled.div`
  width: 60vw;
  height: 200px;
  margin: auto;
  margin-top: 20vh;
  margin-bottom: 100px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const STeamButton = styled.div`
  margin: 25px;
  text-align: center;
  img {
    border: ${props => (props.selected ? "blue solid 5px" : "none")};
    width: 75px;
    height: 75px;
    border-radius: 150px;

    transition: all 250ms ease-out;
    :hover {
      cursor: pointer;
      transform: scale(1.15) translateY(-3px);
    }
  }
`;

const STeamGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  .members {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const SMember = styled.div`
  margin: 25px;
  text-align: center;
  img {
    width: 125px;
    height: 125px;
    border-radius: 125px;
  }
`;

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTeam: "HTH" };
  }

  renderTeam = teamObj => {
    const teamMembers = teamObj.members.map(member => {
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

  renderTeamButtons = () => {
    let renderedTeamButtons = boardMembers.map((team, index) => {
      return (
        <STeamButton
          key={index}
          selected={team.name === this.state.currentTeam}
          onClick={() => this.setState({ currentTeam: team.name })}
        >
          <img src="http://via.placeholder.com/150x150" />
          <h3>{team.name}</h3>
        </STeamButton>
      );
    });
    return renderedTeamButtons;
  };

  render() {
    let renderedTeamButtons = this.renderTeamButtons();

    let renderedTeams = boardMembers.map((team, index) => {
      return this.renderTeam(team);
    });

    return (
      <STeam>
        <STeamButtonGroup>{renderedTeamButtons}</STeamButtonGroup>
        <div>{renderedTeams}</div>
      </STeam>
    );
  }
}

export { Team };
