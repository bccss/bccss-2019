import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SBird = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: black;

  left: ${props => props.x + "px"};
  top: ${props => props.y + "px"};
`;

const Bird = props => {
  const [x, setX] = useState(400);
  const [y, setY] = useState(400);
  const [vX, setVx] = useState(0.1);
  const [vY, setVy] = useState(0.5);

  useEffect(() => {
    const timer = setInterval(() => {
      setX(x + vX);
      setY(y + vY);
    }, 5);

    return () => {
      clearInterval(timer);
    };
  }, [vX, vY, x, y]);

  useEffect(() => {
    const timer2 = setInterval(() => {
      setVx((Math.floor(Math.random() * Math.floor(2)) * 2 - 1) * 0.8);
      setVy(Math.random() * 2 - 1);
      console.log(vX);
    }, 5000);

    return () => {
      clearInterval(timer2);
    };
  }, [vX, vY]);

  useEffect(() => {
    const timer = setInterval(() => {
      props.addDot(x, y);
      console.log("dot added");
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [props, vX, vY, x, y]);

  return <SBird x={x} y={y} />;
};

export default Bird;
