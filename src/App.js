import React, { Component } from "react";
import "./App.css";
import {
  Home,
  About,
  Events,
  Wiki,
  Team,
  Footer
} from "./screens";
import { Navigation } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <About />
        <Events />
        <Team />
        <Wiki />
        <Footer />
      </div>
    );
  }
}

export default App;
