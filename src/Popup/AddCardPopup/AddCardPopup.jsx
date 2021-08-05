import React from "react";
import "../Popup.css";

export default function AddCardPopup(props) {
  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.onChange(name, value);
  };

  return (
    <div
      className={`modal modal__form_type_edit-user ${
        props.open ? "modal_open" : ""
      }`}
    >
      <div className="modal__box">
        <form
          noValidate
          className="modal__form modal__form_type_add-card"
          name="edit-form"
          onSubmit={(e) => props.onSubmit(e)}
        >
          <button
            type="button"
            className="modal__close-button modal__close-button_type-new-place"
            onClick={props.onClick}
          >
            &times;
          </button>
          <h2 className="modal__title">Add card</h2>
          <input
            type="text"
            className="modal__input modal__input-title"
            id="title"
            name="title"
            placeholder="Title"
            value={props.title}
            onChange={onChange}
            required
          />
          <input
            type="url"
            className="modal__input modal__input-card-url"
            id="card-url"
            name="link"
            placeholder="Card url"
            value={props.card}
            onChange={onChange}
            required
          />
          <button
            className="modal__save-button modal__save-button_type_add-card"
            id="add-modal-save-button-add-card"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
