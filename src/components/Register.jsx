import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as auth from '../auth.js';


const Register = () => {

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
// onRegister(email, passwod) - ПРОПС
//   if (formValue.password === formValue.confirmPassword){
//     auth.register(formValue.username, formValue.password, formValue.email).then((res) => {
//       navigate('/login', {replace: true});
//       }
//     );
//   }
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
      <div className='auth__singup'>
      <p className='auth__singup_text'>Уже зарегистрированы?</p>
      <Link to='/sign-in' className='auth__singup-link'>Войти</Link>
      </div>
      </div>
  ); 
}

export default Register;
