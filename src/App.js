import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Weather App</h3>
        <Titles />
        <Form />
      </div>
    );
  }
}

export default App;
