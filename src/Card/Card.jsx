import "./Card.css";
import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  _toggleLike() {
    this.setState((prevState) => ({
      liked: !prevState.liked,
    }));
  }

  render() {
    const liked = this.state.liked
      ? "card__like-button card__like-button_active"
      : "card__like-button";
    return (
      <article className="card">
        <button
          className="card__delete-button"
          onClick={this.props.onClick}
          aria-label="Удалить карточку"
        ></button>
        <img
          src={this.props.link}
          alt={this.props.title}
          className="card__foto"
          onClick={this.props.onImgClick}
        ></img>
        <div className="card__description">
          <h2 className="card__title">{this.props.title}</h2>
          <button
            className={liked}
            onClick={() => this._toggleLike()}
            aria-label="Поставить лайк"
          ></button>
        </div>
      </article>
    );
  }
}
