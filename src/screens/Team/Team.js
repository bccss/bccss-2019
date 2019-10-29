import React, { Component } from "react";
import styled from "styled-components";
import { AST_False } from "terser";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #e7e7e7;

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
    this.state = {
      var1: 20,
      var2: "asd"
    };
  }

  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export { Team };
