import React from "react";

import "./Card.css";

export default ({ title, by, url, img, description }) => (
  <div className="card">
    <a href={url} target="_blank" rel="noopener noreferrer">
      {img ? (
        <img src={img} alt={title} />
      ) : (
        <div className="img-placeholder" />
      )}
    </a>
    <div className="card-label">
      <h2 className="card-label__by">{by}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <p className="card-label__title">{title}</p>
      </a>
      <p className="card-label__description">{description}</p>
    </div>
  </div>
);
