import React from "react";
import AppHeader from "../components/AppHeader";
import Card from "../components/Card";
import terms from "../data/terms";
import "./MagwdPage.css";

const ProjectList = ({ name, projects }) => (
  <section className="project-list container">
    <h2 className="project-list__title">{name}</h2>
    <div className="project-list__contents grid">
      {projects.map(project => (
        <Card key={project.title} {...project} />
      ))}
    </div>
  </section>
);

const App = () => (
  <div className="magwd-app">
    <AppHeader name="MA in Graphic and Web Design" />
    <main className="main">
      <header className="page-header container">
        <h1>Master of Arts in Graphic and Web Design</h1>
        <p className="exhibition-name">Capstone Projects</p>
      </header>
      <div>
        {terms.map(term => (
          <ProjectList {...term} />
        ))}
      </div>
    </main>
    <footer className="page-footer">
      <p>Minneapolis College of Art and Design</p>
      <p>
        <a href="https://mcad.edu/magwd">mcad.edu/magwd</a>
      </p>
    </footer>
  </div>
);

export default App;
