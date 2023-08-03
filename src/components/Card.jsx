import { React, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((item) => item._id === currentUser._id);
  const cardLikeButtonClassName = `photo__like ${
    isLiked && "photo__like_active"
  }`;

  function handleClick() {
    onCardClick({ link: card.link, name: card.name });
  }

  function handleDeleteClick() {
    onCardDelete(card); // Передаем карточку, которую нужно удалить, обработчику onDelete
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
      <div className="photo__cell">
          <img
            onClick={handleClick}
            className="photo__image"
            src={card.link}
            alt={`Изображение ${card.name}`}
          />

        <div className="photo__caption">
          <h2 className="photo__title">{card.name}</h2>
          <div className="photo__like-container">
            <button
              className={cardLikeButtonClassName}
              type="button"
              onClick={handleLikeClick}
            />
            <span className="photo__like-count">{card.likes.length}</span>
          </div>
          {isOwn && (
            <button
              className="photo__delete"
              type="button"
              onClick={handleDeleteClick}
            />
          )}
        </div>
      </div>
  );
}
