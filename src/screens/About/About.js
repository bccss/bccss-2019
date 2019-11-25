import React, { Component } from "react";
import styled from "styled-components";

import theme from "../../utils/theme";
import Banner from "../../components/common/Banner";
import SectionContainer from "../../components/common/SectionContainer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e7e7;
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
      </SectionContainer>
    );
  }
}

export { About };
