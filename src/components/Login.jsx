import React, { useState } from "react";

export const Login = ({ onLogin }) => {
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
    onLogin(formValue.email, formValue.password);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  );
};
