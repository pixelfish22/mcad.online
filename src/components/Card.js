import React from "react";

import "./Card.css";

const Card = ({ title, by, url, img, description }) => (
  <div className="card">
    <a href={url}>
      <div className="card__img-container">
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <div className="img-placeholder" />
        )}
      </div>
    </a>
    <div className="card-label">
      <h2 className="card-label__by">{by}</h2>
      <a href={url}>
        <p className="card-label__title">{title}</p>
      </a>
      <p className="card-label__description">{description}</p>
    </div>
  </div>
);

export default Card;
