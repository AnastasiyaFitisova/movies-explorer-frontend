export const url = "http://localhost:4000";

const checkResult = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject('Возникла ошибка');
  };
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const register = ({ name, email, password }) => {
  return fetch(`${url}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => {
      return checkResult(res);
    });
};

export const authorize = ({ email, password }) => {
  return fetch(`${url}/signin`, {
    method: 'POST',
    headers,
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return checkResult(res);
    });
};

export const logout = () => {
  return fetch(`${url}/logout`, {
    method: 'GET',
    headers,
    credentials: 'include',
  })
  .then((res) => {
    return checkResult(res);
  });
};