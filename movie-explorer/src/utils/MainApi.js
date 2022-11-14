class Api {
  constructor(url) {
    this._url = url;
    this._headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Credentials": true,
    }
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject('Возникла ошибка');
    };
  };


  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._checkResult);
  };

  correctUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
      .then(this._checkResult);
  };

  putLikeandSave(data) {
    const body = {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image,
      trailerLink: data.trailerLink,
      thumbnail: data.thumbnail,
      owner: data.owner,
      movieId: data.movieId,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    };
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(body)
    }).then(this._checkResult);
  }

  disLikeAndDelete(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkResult);
  }

  addSavedCardsOnPage() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkResult);
  }

};

const api = new Api('http://localhost:4000');

export default api;