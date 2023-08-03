import React, { useRef, useEffect } from "react";
import { PopupWithForm } from "./PopupWithForm";

export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "";
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    onUpdateAvatar({
      avatar: inputValue,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      name="popup__title"
      title="Обновить аватар"
      buttonName="Сохранить"
      isLoadingText="Сохранить..."
    >
      <label className="popup__form-element">
        <input
          id="avatar-input"
          type="text"
          className="popup__item popup__item_el_link"
          name="avatar"
          placeholder="Ссылка на картинку"
          pattern="https?://.*\.(png|jpg|jpeg|gif)"
          required={true}
          defaultValue=""
          ref={inputRef}
        />
        <span className="avatar-input-error popup__input-error" />
      </label>
    </PopupWithForm>
  );
}
