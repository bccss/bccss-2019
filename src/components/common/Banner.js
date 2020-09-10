import styled from "styled-components";
import theme from "../../utils/theme";

const BlueBanner = styled.div `
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 25vh;

  .banner {
    position: absolute;
    left: ${props => (props.position === "left" ? 0 : "none")};
    right: ${props => (props.position === "left" ? "none" : 0)};

    top: 10vh;
    height: 100px;
    width: 30vw;
    border-radius: ${props =>
      props.position === "left"
        ? "0px 100px 100px 0px"
        : "100px 0px 0px 100px"};

    background-color: ${theme.mainColor};

    text-align: ${props => (props.position === "left" ? "right" : "left")};
    vertical-align: middle;
    line-height: 100px;
    h1 {
      font-size: 48px;
      font-size: 1.5vw;
      margin: 0;
      margin-right: ${props => (props.position === "left" ? "50px" : "none")};
      margin-left: ${props => (props.position === "left" ? "none" : "60px")};
      color: white;
    }
  }
`;

export default BlueBanner;