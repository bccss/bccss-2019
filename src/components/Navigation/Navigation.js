import React, { Component } from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/images/Logo.svg";

const NavigationContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  padding: 15px 15px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  left: 15px;
  position: absolute;
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

let NavItem = styled.div`
  padding: 0px 15px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 200;
  font-size: 20px;

  z-index: 100;
  :hover {
    color: #35298f;
    font-weight: 500;
  }
`;

let SelectedNavItem = styled.div`
  padding: 0px 15px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 500;
  color: #35298f;
  font-size: 20px;
`;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screens: [
        { name: "Home", screen: "Home" },
        { name: "About Us", screen: "About" },
        { name: "Projects", screen: "Projects" },
        { name: "Resources", screen: "Resources" },
        { name: "Team", screen: "Team" }
      ],
      activeScreen: "Home"
    };
  }

  renderNavItems = () => {
    const { screens, activeScreen } = this.state;

    return screens.map((screen, i) => {
      if (screen.name === activeScreen) {
        return <SelectedNavItem key={i}>{screen.name}</SelectedNavItem>;
      } else {
        return <NavItem key={i}>{screen.name}</NavItem>;
      }
    });
  };

  render() {
    return (
      <NavigationContainer>
        <Logo src={LogoSrc} />
        <NavItemsContainer>{this.renderNavItems()}</NavItemsContainer>
      </NavigationContainer>
    );
  }
}

export { Navigation };
