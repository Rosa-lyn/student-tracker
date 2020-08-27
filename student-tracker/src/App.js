import React from "react";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import List from "./components/List";
import CurrentStudentsList from "./components/CurrentStudentsList";
import GraduateStudentsList from "./components/GraduateStudentsList";
import { Router } from "@reach/router";

function App(props) {
  return (
    <div className="App">
      <Title />
      <Nav />
      <Router>
        <List path="/" />
        <List path="/current" graduated={false} />
        <GraduateStudentsList path="/graduates" />
      </Router>
    </div>
  );
}

export default App;
