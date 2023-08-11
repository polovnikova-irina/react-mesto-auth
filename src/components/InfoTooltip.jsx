import successIcon from "../images/infoTooltip-successIcon.svg";
import failIcon from "../images/infoTooltip-failIcon.svg";

export function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup popup_type_tooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_frame">
        {isSuccess ? (
          <>
            <img
              className="popup__tooltip-image"
              src={successIcon}
              alt="Регистрация прошла успешно!"
            />
            <p className="popup__tooltip-text">
              Вы успешно зарегистрировались!
            </p>
          </>
        ) : (
          <>
            <img
              className="popup__tooltip-image"
              src={failIcon}
              alt="Регистрация не была выполнена!"
            />
            <p className="popup__tooltip-text">
              Что-то пошло не так! Попробуйте еще раз!
            </p>
          </>
        )}
        <button
          onClick={onClose}
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
        />
      </div>
    </div>
  );
}
