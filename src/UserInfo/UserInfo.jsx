import React from "react";
import "./UserInfo.css";

function UserImage(props) {
  return <img src={props.src} className="user__link" alt="User" />;
}

function UserText(props) {
  return (
    <div className="user__text">
      <div className="user__name">{props.name}</div>
      <div className="user__description">{props.description}</div>
    </div>
  );
}

export default function UserInfo(props) {
  return (
    <header className="user">
      <h2 className="user__header">Around</h2>
      <hr />
      <div className="user__profile">
        <div className="user__info">
          <UserImage src={props.info.avatar} />
          <UserText
            name={props.info.name}
            description={props.info.description}
          />
          <button
            className="user__edit-info-button"
            onClick={props.openEditUserPopup}
          ></button>
        </div>
        <button
          className="user__add-card-button"
          onClick={props.openAddCardPopup}
        >
          +
        </button>
      </div>
    </header>
  );
}
