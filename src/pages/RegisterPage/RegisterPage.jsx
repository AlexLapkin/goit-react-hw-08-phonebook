import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/services';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };
  return (
    <form className={css.reg_form} onSubmit={onSubmit}>
      <label>
        <p className={css.reg_form_text}>Name</p>
        <input
          className={css.reg_form_inp}
          type="text"
          name="userName"
          required
          placeholder="Taras Schevchenko"
        />
      </label>
      <label>
        <p className={css.reg_form_text}>Email</p>
        <input
          className={css.reg_form_inp}
          type="email"
          name="userEmail"
          required
          placeholder="hotmail@hotmail.com"
        />
      </label>
      <label>
        <p className={css.reg_form_text}>Password</p>
        <input
          className={css.reg_form_inp}
          type="password"
          name="userPassword"
          required
          placeholder="********"
          minLength={8}
        />
      </label>
      <button className={css.reg_form_btn} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterPage;
