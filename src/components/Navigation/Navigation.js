import React, { Component } from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/images/Logo.svg";

const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  padding: 15px 15px;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const Logo = styled.img`
  left: 15px;
  position: absolute;
`;

const NavItemsContainer = styled.div`
  padding: 15px 15px;
  display: flex;
  flex-direction: row;
  align-self: center;
`;

let NavItem = styled.div`
  margin: 0px 15px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 200;
  font-size: 20px;

  cursor: pointer;

  position: relative;

  z-index: 100;

  ::before {
    content: "";
    width: 0%;
    transition: width 0.45s;
  }

  :hover {
    color: #35298f;

    ::before {
      content: "";
      border: 1px solid #35298f;
      bottom: -5px;
      position: absolute;
      width: 100%;
      transition: width 0.45s;
    }
  }
`;

let SelectedNavItem = styled.div`
  margin: 0px 15px;
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
        { name: "Events", screen: "Events" },
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
        return (
          <NavItem
            key={i}
            onClick={() => {
              this.scrollTo(i);
            }}
          >
            {screen.name}
          </NavItem>
        );
      }
    });
  };

  scrollTo = index => {
    const activeScreen = this.state.screens[index].name;
    this.setState({ activeScreen });
    window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
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
