import "./Card.css";
import React, {useState} from "react";
import {Draggable} from 'react-beautiful-dnd';

export default function Card(props) {

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prevLiked => !prevLiked);
  }

  return (
    <Draggable key={props.key} draggableId={props.key} index={props.index}>
      {(provided) => (
        <li className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
              className={liked
        ? "card__like-button card__like-button_active"
        : "card__like-button"}
              onClick={toggleLike}
              aria-label="Поставить лайк"
            ></button>
          </div>
        </li>
      )}
    </Draggable>
  );
}
