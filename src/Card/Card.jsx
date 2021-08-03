import "./Card.css";
import React, { useState } from "react";

export default function Card(props) {
  const [liked, setLiked] = useState(false);
  return (
    <article className="card">
      <button
        className="card__delete-button"
        onClick={props.onClick}
        aria-label="Удалить карточку"
      ></button>
      <img
        src={props.link}
        alt={props.title}
        className="card__foto"
        onClick={props.onImgClick}
      ></img>
      <div className="card__description">
        <h2 className="card__title">{props.title}</h2>
        <button
          className={
            liked
              ? "card__like-button card__like-button_active"
              : "card__like-button"
          }
          onClick={() => setLiked(!liked)}
          aria-label="Поставить лайк"
        ></button>
      </div>
    </article>
  );
}
