import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">
          My Hobbies: Basketball
        </Person>
        <Person name="Ian" age="33" />
      </div>
    );
  }
}

export default App;
