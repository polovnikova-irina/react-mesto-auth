  class Api {
    constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
      this._authorization = options.headers.authorization;
    }
  
    _checkResponce(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }
  
    getInfo() {
      return fetch(`${this._url}/users/me`, {
        headers: {
          authorization: this._authorization
        }
      })
        .then(this._checkResponce)
    }
  
    getCards() {
      return fetch(`${this._url}/cards`, {
        headers: {
          authorization: this._authorization
        }
      })
        .then(this._checkResponce)
    }
  
    sentUsersData(data) {
      return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
  })
    .then(this._checkResponce)
  }
  
  createCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
  })
    .then(this._checkResponce)
  }
  
  addAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
  })
    .then(this._checkResponce)
  }
  
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
      },
  })
    .then(this._checkResponce)
  }
  
  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization,
      },
  })
    .then(this._checkResponce)
  }
  
  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
      },
  })
    .then(this._checkResponce)
  }
}

export const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-69",
    headers: {
      authorization: "9ec885fb-bc6f-4c8c-9e39-a212b12d1d1a",
      "Content-Type": "application/json",
    },
  });




  
  
  
  
  