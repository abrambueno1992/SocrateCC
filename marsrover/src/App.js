import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// component imports

import Controller from "./components/Controller";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Controller />
      </div>
    );
  }
}

export default App;
