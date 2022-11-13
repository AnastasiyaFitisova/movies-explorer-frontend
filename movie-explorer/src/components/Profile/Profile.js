import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Profile({ onCorrect, OnCorrectIsOk, OnCorrectIsNok, onLogout }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [isformValid, setIsFormValid] = React.useState(false);

  const SignupSchema = yup.object().shape({
    name: yup.string().required().matches(/^[а-яёa-z -]+$/i, 'Please, use only Latin, Cyrillic, space or hyphen'),
    email: yup.string().email().required(),
  });

  const defaultValues = {
    name: currentUser.name,
    email: currentUser.email,
  };

  const {
    register,
    formState: { errors, isValid},
    getValues,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SignupSchema),
    defaultValues: defaultValues,
  });

  React.useEffect(()=> {
    if (getValues('name') === currentUser.name || getValues('email') === currentUser.email || !isValid)
    {setIsFormValid(false)} else {setIsFormValid(true)}
  }, [getValues, currentUser, isValid])

  const onSubmit = (data) => {
    console.info(data);
    onCorrect(data)
  };

  const onError = (errors) => {
    console.error(errors);
  };

  return (
    <div className="profile">
      <p className="profile__title">Привет, {currentUser.name}!</p>
      <form className="profile__form"
        onSubmit={handleSubmit(onSubmit, onError)}>

        <div className="profile__line">
          <input className="profile__input"
            type="text"
            placeholder="Имя"
            required
            {...register("name")}
            defaultValue={defaultValues.name} />
          {errors.name && <p style={{ color: 'red', width: '100%' }}>{errors.name.message}</p>}
        </div>

        <input className="profile__input"
          type="email"
          placeholder="E-mail"
          required
          {...register("email")}
          defaultValue={defaultValues.email} />
        {errors.email && <p style={{ color: 'red', width: '100%' }}>{errors.email.message}</p>}

        {OnCorrectIsOk ? (
          <p style={{ color: 'green', width: '100%' }}>Информация пользователя изменена успешно</p>
        ) : ""}

        {OnCorrectIsNok ? (
          <p style={{ color: 'red', width: '100%' }}>Произошла ошибка на сервере, попробуйте еще раз</p>
        ) : ""}

        <button
          type="submit"
          className="profile__correct-button"
          disabled={!isformValid}
          style={{ background: isformValid ? '.profile__correct-button:hover' : "none" }}>Редактировать</button>
        <button
          type="button"
          className="profile__exit-button"
          onClick={onLogout}>Выйти из аккаунта</button>
      </form>
    </div>
  );
};

export default Profile;