import React, { Component } from "react";
import styled from "styled-components";

const SBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: maroon;
`;

const Background = () => {
  return <SBackground></SBackground>;
};

export default Background;
