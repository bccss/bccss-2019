import React from "react";

import styled from "styled-components";
import theme from "../../utils/theme.js";

import gmail from "../../assets/images/social_media/gmail.png";
import facebook from "../../assets/images/social_media/facebook.png";
import twitter from "../../assets/images/social_media/twitter.png";

const StyledFooter = styled.div`
  user-select: none;

  position: relative;

  background-color: ${theme.mainColor};

  padding-top: 30px;

  height: 150px;
  width: 100vw;

  > p {
    font-size: 16px;
    font-weight: 600;
    color: white;
    text-align: center;
  }
`;

const StyledSocialButtons = styled.div`
  text-align: center;
`;

const StyledIcon = styled.a`
  display: inline-block;

  transition: all 200ms ease-in-out;

  margin: 5px 15px 10px;
  padding: 12px;
  border-radius: 50%;
  background-color: ${theme.mainColorDarker};

  img {
    transition: transform 200ms ease-in-out;
    vertical-align: middle;
    width: 35px;
    height: 35px;
  }
  :hover {
    cursor: pointer;
    background-color: ${theme.secondaryColor};
    img {
      transform: scale(1.2);
    }
  }
`;
const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      <StyledIcon
        href="https://www.facebook.com/bostoncollegecss/"
        target="_blank"
      >
        <img alt="facebook" draggable="false" src={facebook} />
      </StyledIcon>
      <StyledIcon href="https://twitter.com/bccssociety" target="_blank">
        <img alt="twitter" draggable="false" src={twitter} />
      </StyledIcon>
      <StyledIcon href="mailto:bccssociety@gmail.com">
        <img alt="gmail" draggable="false" src={gmail} />
      </StyledIcon>
    </StyledSocialButtons>
  );
};

const Footer = props => {
  let date = new Date();

  return (
    <StyledFooter>
      <SocialButtons />
      <p>© Boston College Computer Science Society {date.getFullYear()}</p>
    </StyledFooter>
  );
};

export { Footer };
