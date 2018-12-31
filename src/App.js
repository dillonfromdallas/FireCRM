import React, { Component } from "react";
import "./App.css";

import AppNavbar from "./components/layout/AppNavbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
