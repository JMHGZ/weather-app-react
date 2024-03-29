import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const APP_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  getWeather = async e => {
    e.preventDefault();

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Austin,us&appid=${APP_KEY}&units=imperial`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <h3>Weather App</h3>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
