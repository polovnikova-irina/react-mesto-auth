export const BASE_URL = 'https://auth.nomoreparties.co';

 const checkResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

export const register = (email,password) => {
    return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({ email, password })
})
.then(checkResponce);
};


export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(checkResponce)
    .then((data) => {
      if (data.jwt){
        localStorage.setItem('jwt', data.jwt);
        return data;
      }
    })
  }; 

  export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(checkResponce)
};
   


