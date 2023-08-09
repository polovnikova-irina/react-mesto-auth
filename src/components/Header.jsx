import logo from "../images/logo.svg";

export function Header({userData}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      userData={userData}
    </header>
 
  );
}
