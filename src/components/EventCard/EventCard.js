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
        <img src="https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg" />
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
              First General Meeting
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
            <p style={{ margin: 0 }}>September 15th, 2020 </p>
            <p style={{ margin: 0 }}> • </p>
            <p style={{ margin: 0 }}>6 PM - 7 PM </p>
            <p style={{ margin: 0 }}> • </p>
            <p style={{ margin: 0 }}>Online </p>
          </div>
          <div>
            <p>
              Join us for our first general meeting on Google Hangouts! We are excited to welcome new members and discuss plans for the 2020-2021 year.
            </p>
          </div>
        </div>
      </CardContainer>
    );
  }
}

export default EventCard;
