import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var style = {
    color: "red",
    backgroundColor: "yellow",
    padding: "px",
    borderRadius: "5px",
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>I am react Person</h2>
        <Person name="Munna" job="Football" ticket="456"></Person>
        <Person name="Arham" job="Dorshok" ticket="987"></Person>
        <Person name="Masud" job="Refarey" ticket="876"></Person>
        <Person name="Rana"  job="Bite" ticket="543"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "1px solid yellow", width: "400px", margin: "10px" }}>
      <h3>My name: {props.name}</h3>
      <p>My profession: {props.job}</p>
      <p><em>Ticket: {props.ticket}</em></p>
    </div>
  );
}

export default App;
