import React from "react";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import AllStudentsList from "./components/AllStudentsList";
import CurrentStudentsList from "./components/CurrentStudentsList";
import GraduateStudentsList from "./components/GraduateStudentsList";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      <Router>
        <AllStudentsList path="/" />
        <CurrentStudentsList path="/current" />
        <GraduateStudentsList path="/graduates" />
      </Router>
    </div>
  );
}

export default App;
