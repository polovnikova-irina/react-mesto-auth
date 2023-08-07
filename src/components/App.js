import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ImagePopup } from "./ImagePopup";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";
import { ConfirmPopup } from './ConfirmPopup'
import { Register } from './Register'
import { Login } from './Login'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupCard, setIsDeletePopupCard] = useState(false)
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopup, setIsImagePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const [currentUser, setСurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleTrashIconClick = (card) => {
    setSelectedCard(card);
    setIsDeletePopupCard(true); 
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopup(true);
  };

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCards]) => {
        setСurrentUser({
          name: dataUser.name,
          about: dataUser.about,
          avatar: dataUser.avatar,
          _id: dataUser._id,
        });
        setCards(dataCards);
      })
      .catch((err) =>
        console.log("Ошибка при загрузке данных о пользователе:", err)
      );
  }, []);

  const handleUpdateUser = (userData) => {
    setIsLoading(true);
    api
      .sentUsersData(userData)
      .then((data) => {
        setСurrentUser(data);
        closeAllPopups();
      })
      .catch((err) =>
        console.log("Ошибка при изменении данных о пользователе:", err)
      )
      .finally(() => setIsLoading(false));
  };

  const handleUpdateAvatar = (data) => {
    setIsLoading(true);
    api
      .addAvatar(data)
      .then((res) => {
        setСurrentUser(res);
        closeAllPopups();
      })
      .catch((err) =>
        console.log("Ошибка при изменении данных об аватаре:", err)
      )
      .finally(() => setIsLoading(false));
  };

  const handleAddPlaceSubmit = (cardData) => {
    setIsLoading(true);
    api
      .createCard(cardData)
      .then((newCards) => {
        setCards([newCards, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log("Ошибка при добавлении карточки:", err))
      .finally(() => setIsLoading(false));
  };

  const handleCardDelete = (card) => {
    setIsLoading(true);
    api
      .deleteCard(card._id)
      .then(() => {
        //исключаем из массива state те карточки, у которых _id совпадает с _id переданной карточки card
        //Удаляем карточку из состояния cards после успешного удаления
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((error) => {
        console.error("Ошибка при удалении карточки:", error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleCardLike = (card) => {
    // есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api.addLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => {
        console.error("Ошибка при постановки лайка:", error);
      });
    } else {
      api
        .deleteLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((error) => {
          console.error("Ошибка при удалении лайка:", error);
        });
    }
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopup(false);
    setIsDeletePopupCard(false)
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        {loggedIn && <Main />}
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/main" replace /> : <Navigate to="/sign-in" replace />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDelete={handleTrashIconClick}
          onCardLike={handleCardLike}
          cards={cards}
        />

        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading} 
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading} 
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={isLoading} 
        />

        <ConfirmPopup
        isOpen={isDeletePopupCard}
        onClose={closeAllPopups}
        onDelete={handleCardDelete}
        selectedCard={selectedCard}
        isLoading={isLoading} 
      />  

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopup}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
