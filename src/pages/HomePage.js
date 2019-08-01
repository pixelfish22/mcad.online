import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default () => (
  <main className="home-page">
    <ul>
      <li>
        <Link to="/magwd">MAGWD Capstone Projects</Link>
      </li>
      <li>
        <Link to="/happy-holidays-2018">Happy Holidays 2018</Link>
      </li>
    </ul>
  </main>
);
