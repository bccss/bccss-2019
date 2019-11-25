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
`;

class Events extends Component {
  render() {
    return (
      <SectionContainer color="#fffbf8">
        <Banner position="left">
          <div className="banner">
            <h1>Events</h1>
          </div>
        </Banner>
      </SectionContainer>
    );
  }
}

export { Events };
