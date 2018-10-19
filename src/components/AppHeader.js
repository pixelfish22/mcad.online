import React from "react";
import logo from "../img/MCAD_X.svg";

import "./AppHeader.css";

export default () => (
  <header className="app-header">
    MCAD <img className="logo" src={logo} alt="X" /> MASTER OF ARTS IN GRAPHIC
    AND WEB DESIGN
  </header>
);
