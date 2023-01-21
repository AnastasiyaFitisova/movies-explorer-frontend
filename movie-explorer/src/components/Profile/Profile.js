import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useForm from '../../hooks/UseForm';

function Profile({ onCorrect, OnCorrectIsOk, OnCorrectIsNok, onLogout }) {

  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, setValues, resetForm } = useForm();

  const disabledButton = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  React.useEffect(() => {
    setValues(currentUser)
  }, [currentUser, setValues])

  function onSubmit(evt) {
    evt.preventDefault();
    onCorrect({
      name: values.name,
      email: values.email
    });
    resetForm()
  }


  return (
    <div className="profile">
      <p className="profile__title">Привет, {currentUser.name}!</p>
      <form className="profile__form"
        onSubmit={onSubmit}>

        <div className="profile__line">
          <input className="profile__input"
            type="text"
            placeholder="Имя"
            required
            name='name'
            value={values?.name ?? currentUser.name}
            onChange={handleChange}
          />
          {errors?.name && <p style={{ color: 'red', width: '100%' }}>{errors.name}</p>}
        </div>

        <input className="profile__input"
          type="email"
          placeholder="E-mail"
          required
          name="email"
          pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
          value={values?.email ?? currentUser.email}
          onChange={handleChange}
        />
        {errors?.email && <p style={{ color: 'red', width: '100%' }}>{errors.email}</p>}

        {OnCorrectIsOk ? (
          <p style={{ color: 'green', width: '100%' }}>Информация пользователя изменена успешно</p>
        ) : ""}

        {OnCorrectIsNok ? (
          <p style={{ color: 'red', width: '100%' }}>Произошла ошибка на сервере, попробуйте еще раз</p>
        ) : ""}

        <button
          type="submit"
          className="profile__correct-button"
          disabled={disabledButton}
          style={{ background: disabledButton ? '.profile__correct-button:hover' : "none" }}>Редактировать</button>
        <button
          type="button"
          className="profile__exit-button"
          onClick={onLogout}>Выйти из аккаунта</button>
      </form>
    </div>
  );
};

export default Profile;