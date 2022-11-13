class MoviesApi {
  constructor(url) {
    this._url = url;
    this._headers = {
      'Content-Type': 'application/json',
    }
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject('Возникла ошибка');
    };
  };

  getMoviesCards() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkResult);
  };

};

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;