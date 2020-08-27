import React from "react";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import List from "./components/List";
import FilterBar from "./components/Filterbar";
import { Router } from "@reach/router";

function App(props) {
  return (
    <div className="App">
      <Title />
      <Nav />
      {/* <FilterBar /> */}

      <Router>
        <List path="/" />
        <List path="/:graduated" />
      </Router>
    </div>
  );
}

export default App;
