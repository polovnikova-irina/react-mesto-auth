export function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_zoom-image ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_type_zoom-image">
        <button
          className="popup__close-button popup__close-button_type_zoom-image"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
        <figure>
          <img
            className="popup__image popup__image_type_zoom-image"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="popup__caption popup__caption_type_zoom-image">
            {props.card.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
