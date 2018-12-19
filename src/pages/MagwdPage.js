import React, { Component } from "react";
import AppHeader from "../components/AppHeader";
import Card from "../components/Card";
import projects from "../data/projects";
import "./MagwdPage.css";

class App extends Component {
  render() {
    return (
      <div className="magwd-app">
        <AppHeader name="Online Learning" />
        <main className="main grid">
          <div className="title-card">
            <h1>Master of Arts in Graphic and Web Design</h1>
            <p className="exhibition-name">Capstone Projects</p>
            <p className="year">Fall 2018</p>
          </div>
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
