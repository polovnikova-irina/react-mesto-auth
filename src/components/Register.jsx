import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = ({ onRegister }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formValue.email, formValue.password);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__form-input">
          <input
            id="email-input"
            type="email"
            className="auth__item auth__item_el_email"
            name="email"
            placeholder="Email"
            required={true}
            value={formValue.email}
            onChange={handleChange}
          />
        </label>
        <label className="auth__form-input">
          <input
            id="password"
            type="password"
            className="auth__item auth__item_el_password"
            name="password"
            placeholder="Пароль"
            required={true}
            value={formValue.password}
            onChange={handleChange}
          />
        </label>
        <button className="auth__submit-btn" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="auth__singup">
        <p className="auth__singup-text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="auth__singup-link">
          Войти
        </Link>
      </div>
    </div>
  );
};
