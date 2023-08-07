import React, { useState } from "react";
// import * as auth from '../auth.js';


const Login = () => {

  const[formValue, setFormValue]= useState({
    email: '',
    passwod: ''
  })

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
  
    setFormValue({
    ...formValue,
    [name]: value
  })
}

// const handleSubmit = (e) => {
//   e.preventDefault();

// }


  return (
    <div className="register">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" 
      // onSubmit={handleSubmit}
      >
      <label className="auth__form-input">
        <input
          id="email-input"
          type="email"
          className="auth_item auth__item_el_title"
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
          className="auth__item auth__item_el_subtitle"
          name="password"
          placeholder="Пароль"
          required={true}
          value={formValue.passwod}
          onChange={handleChange}
        />
      </label>
      <button className="auth__submit-btn" type="submit">Зарегистрироваться</button>
      </form>
      </div>
  ); 
}

export default Login;
