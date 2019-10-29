import React, { Component } from "react";
import { Home, About, Events, Projects, Resources, Team } from "./screens";
import { Navigation } from "./components";

class App extends Component {
  render() {
    return (
      <div>
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
