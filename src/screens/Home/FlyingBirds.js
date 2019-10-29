import React, { Component } from "react";
import styled from "styled-components";

import Bird from "./Bird";

const SFlyingBirds = styled.div`
  position: relative;
`;

const SDot = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: black;

  left: ${props => props.x + "px"};
  top: ${props => props.y + "px"};
`;

class FlyingBirds extends Component {
  constructor(props) {
    super(props);
    this.state = { dots: [] };
  }

  renderDots = () => {
    return this.state.dots.map(dot => {
      return <SDot x={dot.x} y={dot.y} />;
    });
  };

  addDot = (x, y) => {
    let tempState = this.state;
    this.state.dots.push({ x: x, y: y });
    this.setState(tempState);
  };

  render() {
    let dots = this.state.dots.map(dot => {
      return <SDot x={dot.x} y={dot.y} />;
    });
    return (
      <SFlyingBirds>
        {dots}
        <Bird addDot={this.addDot} />
      </SFlyingBirds>
    );
  }
}

export default FlyingBirds;
