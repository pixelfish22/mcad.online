import React from "react";

import "./Card.css";

const toggleMore = e => {
  const cardEl = e.target.closest(".card");
  cardEl.classList.toggle("is-open");
};

export default ({ title, by, url, img, description }) => (
  <div className="card">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} />
    </a>
    <div className="card-label">
      <h2>{title}</h2>
      <p>{by}</p>
      <button onClick={toggleMore} className="card-label__toggle">
        ...
      </button>
      <p className="card-label__description">{description}</p>
    </div>
  </div>
);
