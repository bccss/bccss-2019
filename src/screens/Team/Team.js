import React, { Component } from "react";
import styled from "styled-components";

const boardMembers = {
  HTH: [
    { name: "John", picture: "http://via.placeholder.com/150x150" },
    { name: "Talia", picture: "http://via.placeholder.com/150x150" },
    { name: "Jaq", picture: "http://via.placeholder.com/150x150" },
    { name: "Megan", picture: "http://via.placeholder.com/150x150" },
    { name: "Joy", picture: "http://via.placeholder.com/150x150" },
    { name: "Sean", picture: "http://via.placeholder.com/150x150" },
    { name: "Daniel", picture: "http://via.placeholder.com/150x150" }
  ],
  Community: [
    { name: "Immalla", picture: "http://via.placeholder.com/150x150" },
    { name: "Adrianna", picture: "http://via.placeholder.com/150x150" },
    { name: "Jack", picture: "http://via.placeholder.com/150x150" }
  ],
  Outreach: [
    { name: "Lindsay", picture: "http://via.placeholder.com/150x150" },
    { name: "Hannah", picture: "http://via.placeholder.com/150x150" }
  ],
  Scholars: [
    { name: "Jolene", picture: "http://via.placeholder.com/150x150" },
    { name: "Will", picture: "http://via.placeholder.com/150x150" }
  ],
  Tech: [
    { name: "Roger", picture: "http://via.placeholder.com/150x150" },
    { name: "Subraiz", picture: "http://via.placeholder.com/150x150" },
    { name: "Gina", picture: "http://via.placeholder.com/150x150" },
    { name: "Jeff", picture: "http://via.placeholder.com/150x150" },
    { name: "Andres", picture: "http://via.placeholder.com/150x150" }
  ],
  Design: [
    { name: "Immalla", picture: "http://via.placeholder.com/150x150" },
    { name: "Adrianna", picture: "http://via.placeholder.com/150x150" },
    { name: "Jack", picture: "http://via.placeholder.com/150x150" }
  ]
};

const STeam = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #e7e7e7;
  background-color: gray;

  .teamMember {
    width: 150px;
    height: 150px;
    margin: 25px;
    border-radius: 150px;
  }
`;

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <STeam>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
        <img
          className="teamMember"
          src="http://bccss.io/img/team/johnab.jpg"
          alt="john"
        ></img>
      </STeam>
    );
  }
}

export { Team };
