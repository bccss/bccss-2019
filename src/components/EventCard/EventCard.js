import React, { Component } from "react";
import styled from "styled-components";
import theme from "../../utils/theme";

const CardContainer = styled.div`
margin-left: 30px;
margin-right; 30px;
display: inline-block;
white-space: normal;
text-align: left;

  img {
    z-index: 2;
    width: 500px;
    height: 300px;
    object-fit: cover;
    border-radius: 25px;
  }
  .content {
    background-color: ${theme.mainColor};
    width: 450px;
    margin-top: -50px;
    padding: 65px 25px 25px;
    border-radius: 25px;
  }

  color: white;
  font-size: 1.2em;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 35px;
`;
class EventCard extends Component {
  render() {
    return (
      <CardContainer>
        <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY3NDg4OTU3NjQxMTQwMDEz/halloween-gettyimages-172988453.jpg" />
        <div className="content">
          <div style={{ display: "flex" }}>
            <p
              style={{
                margin: 0,
                color: "#dccaa0",
                fontSize: "1.8em",
                fontWeight: "bolder",
              }}
            >
              Hacky Halloween
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "3px dashed #dccaa0",
              paddingBottom: "20px",
            }}
          >
            <p style={{ margin: 0 }}>October 30th, 2019 </p>
            <p style={{ margin: 0 }}> • </p>
            <p style={{ margin: 0 }}>5 PM - 7 PM </p>
            <p style={{ margin: 0 }}> • </p>
            <p style={{ margin: 0 }}>Fulton 255 </p>
          </div>
          <div>
            <p>
              Do you like creating things? Are you HYPED for halloweekend? Come
              enjoy some spooky treats and meet other people interested in
              participating in BC's hackathon!
            </p>
          </div>
        </div>
      </CardContainer>
    );
  }
}

export default EventCard;
