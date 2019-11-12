import React, { Component } from "react";
import "./App.css";
import { Home, About, Events, Projects, Resources, Team } from "./screens";
import { Navigation } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <About />
        <Events />
        <Projects />
        <Resources />
        <Team />
      </div>
    );
  }
}

export default App;
