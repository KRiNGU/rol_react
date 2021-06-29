import '../Popup.css'

export default function ImgPopup(props) {
  return (
    <div className={`modal modal__open-img ${
        props.open ? "modal_open" : ""
      }`}
      title="overlay"
      onClick={(e)=>props.onOverlayClick(e)}
      >
      <div className="modal__box modal__box_open-img">
        <form
          className="modal__form modal__form_type_open-img"
          name="large-img"
        >
          <button
            className="modal__close-button modal__close-button_type_open-img"
            id="modal-close-button-open-img"
            type="button"
            onClick={props.onClick}
          >
            &times;
          </button>
          <img className="modal__open-img-image" src={props.src} alt="Imaga"/>
          <p className="modal__open-img-title">{props.title}</p>
        </form>
      </div>
    </div>
  );
}
