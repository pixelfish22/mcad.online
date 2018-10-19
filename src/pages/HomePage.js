import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default () => (
  <main className="home-page">
    <h1>Student Work</h1>

    <p>
      <Link to="/magwd">Fall 2018 Capstone Projects</Link>
    </p>
  </main>
);
