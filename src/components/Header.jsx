import { Route, Routes, Link } from "react-router-dom";
import logo from "../images/logo.svg";

export function Header({ userEmail, loggedIn, onSignOut }) {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        <Routes>
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="header__link">
                Регистрация
              </Link>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Link to="/sign-in" className="header__link">
                Войти
              </Link>
            }
          />
          <Route
            path="/"
            element={
              loggedIn ? (
                <div className="header__user-info">
                  <p className="header__email">{userEmail}</p>
                  <button onClick={onSignOut} className="header__link">
                    Выйти
                  </button>
                </div>
              ) : (
                <Link to="/sign-in" className="header__link">
                  Вход
                </Link>
              )
            }
          />
        </Routes>
      </div>
    </header>
  );
}
