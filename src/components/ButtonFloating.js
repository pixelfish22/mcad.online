import React from "react";
import "./ButtonFloating.css";

export default ({ className, children, ...rest }) => (
  <button className={`button-floating ${className || ""}`} {...rest}>
    {children}
  </button>
);
