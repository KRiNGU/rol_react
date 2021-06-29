import React from "react";
import "../Popup.css";

export default class EditUserPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.props.onChange(id, value);
  };

  render() {
    return (
      <div
        className={`modal modal__form_type_edit-user ${
          this.props.open ? "modal_open" : ""
        }`}
      >
        <div className="modal__box">
          <form
            noValidate
            className="modal__form modal__form_type_edit-user"
            name="edit-form"
            onSubmit={(e) => this.props.onSubmit(e)}
          >
            <button
              type="button"
              className="modal__close-button modal__close-button_type-new-place"
              onClick={this.props.onClick}
            >
              &times;
            </button>
            <h2 className="modal__title">Edit user</h2>
            <input
              type="text"
              className="modal__input modal__input-name"
              id="name"
              name="name"
              placeholder="User"
              value={this.props.name}
              onChange={(event) => this.onChange(event)}
              required
            />
            <input
              type="text"
              className="modal__input modal__input-description"
              id="description"
              name="description"
              placeholder="User description"
              value={this.props.description}
              onChange={(event) => this.onChange(event)}
              required
            />
            <input
              type="text"
              className="modal__input modal__input-avatar"
              id="avatar"
              name="avatar"
              placeholder="User avatar link"
              value={this.props.avatar}
              onChange={(event) => this.onChange(event)}
              required
            />
            <button
              className="modal__save-button modal__save-button_type_edit-user"
              id="add-modal-button-edit-user"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
