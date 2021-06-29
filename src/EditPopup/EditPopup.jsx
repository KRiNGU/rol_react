import React from "react";
import "./EditPopup.css";

function Input({ id, type, name, placeholder, onChange }) {
  return (
    <input
      className={"modal__input modal__input-" + id}
      placeholder={placeholder}
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      required
    />
  );
}

export default class EditPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.props[`on${name}Change`](value);
  };

  renderInput(input) {
    return (
      <Input
        id={input.id}
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        onChange={this.handleInputChange}
      />
    );
  }

  renderSpan(id) {
    return (
      <span className={`modal__input-error modal__input-error_${id}`}></span>
    );
  }

  handleChange(event, target) {
    this.setState({ [target]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <div
        className={
          "modal modal__" +
          this.props.class +
          " " +
          (this.props.open ? "modal_open" : "")
        }
      >
        <div className="modal__box">
          <form
            onSubmit={(e) => this.handleSubmit(e)}
            action=""
            className={"modal__form modal__form_type_" + this.props.class}
          >
            <button
              className="modal__close-button modal__close-button_type_new-place"
              id="modal-close-button-new-place"
              type="button"
              onClick={this.props.onCloseClick}
            >
              &times;
            </button>
            <h2 className="modal__title">{this.props.title}</h2>
            {this.renderInput(this.props.firstInput)}
            {this.renderSpan(this.props.firstInput.id)}
            {this.renderInput(this.props.secondInput)}
            {this.renderSpan(this.props.secondInput.id)}
            {this.props.thirdInput && this.renderInput(this.props.thirdInput)}
            {this.props.thirdInput && this.renderSpan(this.props.thirdInput.id)}
            <button
              className={
                "modal__save-button modal__save-button_type_" + this.props.class
              }
              id={"add-modal-button-" + this.props.class}
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
