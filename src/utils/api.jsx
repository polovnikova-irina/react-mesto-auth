class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(endpoint, options) {
    const url = `${this._baseUrl}${endpoint}`;
    return fetch(url, options).then(this._checkResponse);
  }

  getInfo() {
    return this._request('/users/me', {
      method: 'GET',
      headers: this._headers
    });
  }

  getCards() {
    return this._request('/cards', {
      method: 'GET',
      headers: this._headers
    });
  }

  sentUsersData(data) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: data.name, about: data.job })
    });
  }

  createCard(data) {
    return this._request('/cards', {
      method: 'POST',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: data.name, link: data.link })
    });
  }

  addAvatar(data) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ avatar: data.avatar })
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }

  addLike(cardId) {
    return this._request(`/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    });
  }

  deleteLike(cardId) {
    return this._request(`/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    });
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '9ec885fb-bc6f-4c8c-9e39-a212b12d1d1a',
    'Content-Type': 'application/json',
  },
});


  
  
  
  
  