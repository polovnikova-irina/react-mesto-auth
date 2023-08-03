// import React, { useEffect, useContext, useState } from "react";
import { PopupWithForm } from "./PopupWithForm";

export function Register() {

  return (
    <PopupWithForm
    //   isOpen={isOpen}
    //   onClose={onClose}
    //   onSubmit={handleSubmit}
    //   isLoading={isLoading}
      name="registre"
      title="Регистрация"
      buttonName="Зарегистрироваться"
    //   isLoadingText="Сохранить..."
    >
      <label className="popup__form-element">
        <input
          id="email-input"
          type="email"
          className="popup__item popup__item_el_title"
          name="email"
          placeholder="Email"
          required={true}
        //   value={name}
        //   onChange={handleNameChange}
        />
        <span className="email-input-error popup__input-error" />
      </label>
      <label className="popup__form-element">
        <input
          id="password"
          type="password"
          className="popup__item popup__item_el_subtitle"
          name="password"
          placeholder="Пароль"
          required={true}
        //   value={description}
        //   onChange={handleAboutChange}
        />
        <span className="password-input-error popup__input-error" />
      </label>
    </PopupWithForm>
  );
}