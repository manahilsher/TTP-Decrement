import React, { Component } from "react";
import Decrement from "./components/Decrement";
import "./App.css";

class App extends Component {
  render() {
    return <Decrement start={5} />;
  }
}

export default App;
