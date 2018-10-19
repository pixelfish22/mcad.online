import React, { Component } from "react";
import Card from "../components/Card";
import projects from "../data/projects";

class App extends Component {
  render() {
    return (
      <main className="main grid">
        <h1 className="title-card">
          <div>Capstone Projects</div>
          <div>Fall 2018</div>
        </h1>
        {projects.map(project => (
          <Card key={project.title} {...project} />
        ))}
      </main>
    );
  }
}

export default App;
