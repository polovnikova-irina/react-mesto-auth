import React, { useEffect, useContext, useState } from "react";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser, isOpen]);

  // Обработчики изменения полей ввода
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAboutChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      job: description,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      name="edit-profile"
      title="Редактировать профиль"
      buttonName="Сохранить"
      isLoadingText="Сохранить..."
    >
      <label className="popup__form-element">
        <input
          id="name-input"
          type="text"
          className="popup__item popup__item_el_title"
          name="name"
          minLength={2}
          maxLength={40}
          placeholder="Имя"
          required={true}
          value={name}
          onChange={handleNameChange}
        />
        <span className="name-input-error popup__input-error" />
      </label>
      <label className="popup__form-element">
        <input
          id="about-input"
          type="text"
          className="popup__item popup__item_el_subtitle"
          name="job"
          minLength={2}
          maxLength={200}
          placeholder="О себе"
          required={true}
          value={description}
          onChange={handleAboutChange}
        />
        <span className="about-input-error popup__input-error" />
      </label>
    </PopupWithForm>
  );
}
