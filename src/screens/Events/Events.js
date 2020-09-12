import React, { Component } from "react";
import styled from "styled-components";
import theme from "../../utils/theme";

import Banner from "../../components/common/Banner";
import SectionContainer from "../../components/common/SectionContainer";
import EventCard from "../../components/EventCard/EventCard";

const CardContainer = styled.div`
  position: relative;
  width: 100vw;
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
            <h1>Upcoming Events</h1>
          </div>
        </Banner>
        <CardContainer>
          {/* Event cards go here. Need to make card container horz. scrollable */}
          <EventCard />
        </CardContainer>
      </SectionContainer>
    );
  }
}

export { Events };
