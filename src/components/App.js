import React, { Component } from "react";
import Card from "./Card";
import AppHeader from "./AppHeader";
import projects from "../data/projects";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <main className="main grid">
          <h1 className="title-card">
            <div>Capstone Projects</div>
            <div>Fall 2018</div>
          </h1>
          {projects.map(project => (
            <Card key={project.title} {...project} />
          ))}
        </main>
        <footer className="page-footer">
          <p>Minneapolis College of Art and Design</p>
          <p>
            <a href="https://mcad.edu/magwd">mcad.edu/magwd</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
