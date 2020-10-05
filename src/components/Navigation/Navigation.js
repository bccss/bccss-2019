import React, { Component } from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/images/Logo.svg";

const NavigationContainer = styled.div `
  position: fixed;
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  width: 100vw;
  padding: 15px 15px;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const Logo = styled.img `
  left: 15px;
  position: absolute;
`;

const NavItemsContainer = styled.div `
  padding: 15px 15px;
  display: flex;
  flex-direction: row;
  align-self: center;
`;

let NavItem = styled.div `
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
    color: #8a100b;

    ::before {
      content: "";
      border: 1px solid #8a100b;
      bottom: -5px;
      position: absolute;
      width: 100%;
      transition: width 0.45s;
    }
  }
`;

let SelectedNavItem = styled.div `
  margin: 0px 15px;
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 500;
  color: #dccaa0;
  font-size: 20px;
`;

// this is the navigation bar
class Navigation extends Component {
    constructor(props) {
        super(props);

        // add a scroll listener to update nav bar
        this.listener = null;

        this.state = {
            screens: [
                { name: "Home", screen: "Home" },
                { name: "About Us", screen: "About" },
                { name: "Events", screen: "Events" },
                { name: "Team", screen: "Team" },
                { name: "Wiki", screen: "Wiki" }
            ],
            activeScreen: "Home"
        };
    }

    renderNavItems = () => {
        const { screens, activeScreen } = this.state;

        return screens.map((screen, i) => {
            if (screen.name === activeScreen) {
                return <SelectedNavItem key = { i } > { screen.name } </SelectedNavItem>;
            } else {
                return ( 
                  <
                    NavItem key = { i }
                    onClick = { 
                      () => { this.scrollTo(i); }
                    }
                  > 
                    { screen.name } 
                  </NavItem>
                );
            }
        });
    };

    scrollTo = index => {
        console.log('scroll to called');
        const activeScreen = this.state.screens[index].name;
        console.log(activeScreen.innerHeight);
        this.setState({ activeScreen });
        // TODO: update this scroll to 
        // top: window.innerHeight * index only works when all pages are the size of the website
        // top: screenContainer[i], behavior: smooth
        window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
    };

    // act only after the DOM loaded the component
    componentDidMount() {
      console.log('did mount called');
      console.log(this.state.screens[0].innerHeight);

      // scroll listener activates
      this.listener = document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        
        // iterate through possible sections to update event color
        for(let i = 0; i < this.state.screens.length; i++) {
          // if the height of user's view is less than window * index, update on first match only
          // TODO: update this scroll to
          if(scrolled < (window.innerHeight * (i + 1))) {
            const activeScreen = this.state.screens[i].name;
            this.setState({activeScreen});
            return;
          }
        }
      });
    }

    componentDidUpdate() {
      document.removeEventListener("scroll", this.listener);
    }


    render() {
        return ( 
          <NavigationContainer>
            <Logo src = { LogoSrc }/> 
            <NavItemsContainer> { this.renderNavItems() } </NavItemsContainer> 
          </NavigationContainer >
        );
    }
}

export { Navigation };