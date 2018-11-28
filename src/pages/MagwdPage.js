import React, { Component } from "react";
import Card from "../components/Card";
import projects from "../data/projects";

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
