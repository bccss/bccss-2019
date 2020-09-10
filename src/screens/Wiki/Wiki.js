import React, { Component } from "react";
import styled from "styled-components";
import theme from "../../utils/theme";

import Banner from "../../components/common/Banner";
import SectionContainer from "../../components/common/SectionContainer";

const CardContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Wiki extends Component {
  render() {
    return (
      <SectionContainer color="#fffbf8">
        <Banner position="left">
          <div className="banner">
            <h1>Resources Wiki</h1>
          </div>
        </Banner>
        <CardContainer>
        </CardContainer>
      </SectionContainer>
    );
  }
}

export { Wiki };
