import React, { useState,  useEffect } from "react";
import { PopupWithForm } from "./PopupWithForm";

export function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };
  
  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      name="add-card"
      title="Новое место"
      buttonName="Создать"
      isLoadingText="Создать..."
    >
      <label className="popup__form-element">
        <input
          id="photo-name-input"
          type="text"
          className="popup__item popup__item_el_photo-name"
          name="name"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required={true}
          value={name}
          onChange={handleNameChange}
        />
        <span className="photo-name-input-error popup__input-error" />
      </label>
      <label className="popup__form-element">
        <input
          id="photo-link-input"
          type="text"
          className="popup__item popup__item_el_link"
          name="link"
          placeholder="Ссылка на картинку"
          pattern="https?://.*\.(png|jpg|jpeg|gif)"
          required={true}
          value={link}
          onChange={handleLinkChange}
        />
        <span className="photo-link-input-error popup__input-error" />
      </label>
    </PopupWithForm>
  );
}
