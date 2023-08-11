import React from "react";
import { Card } from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__edit">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <div className="profile__overlay">
            <button
              onClick={props.onEditAvatar}
              className="profile__avatar-btn"
              type="button"
              aria-label="Изменить аватар"
            />
          </div>
        </div>
        <div className="profile__info-wrapper">
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
            />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
        />
      </section>
      <section className="photos" aria-label="Фото-контейнер">
        <ul className="photo">
          {props.cards.map((item) => (
            <li key={item._id}>
              <Card
                card={item}
                onCardClick={props.onCardClick}
                onCardDelete={props.onCardDelete}
                onCardLike={props.onCardLike}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
