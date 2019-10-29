import React, { Component } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 45vw;
  position: relative;
  overflow: hidden;
  border-radius: 35px;
  box-shadow: -4px 2px 12px rgba(0, 0, 0, 0.1);
  padding: 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 35px;
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s linear;

  :hover {
    opacity: 0.9;
    transition: 0.5s transform linear;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 130px;
  background-color: white;
  opacity: 1;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 12px 25px;
`;

class EventCard extends Component {
  render() {
    return (
      <CardContainer>
        <InfoContainer>
          <div style={{ display: "flex" }}>
            <p style={{ margin: 0 }}>Hacky Halloween</p> &nbsp;
            <p style={{ margin: 0 }}> • Fulton 255</p>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ margin: 0 }}>October 30th, 2019</p> &nbsp;
            <p style={{ margin: 0 }}> • 5PM - 7PM</p>
          </div>
          <div>
            <p>
              Do you like creating things? Are you HYPED for halloweekend? Come
              enjoy some spooky treats and meet other people interested in
              participating in BC's hackathon!{" "}
            </p>
          </div>
        </InfoContainer>
        <ImageContainer>
          <EventImage src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY3NDg4OTU3NjQxMTQwMDEz/halloween-gettyimages-172988453.jpg" />
        </ImageContainer>
      </CardContainer>
    );
  }
}

export { EventCard };
