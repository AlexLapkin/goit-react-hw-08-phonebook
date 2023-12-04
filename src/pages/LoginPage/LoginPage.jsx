import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/services';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
  };

  return (
    <form className={css.login_form} onSubmit={onSubmit}>
      <label>
        <p className={css.login_form_text}>Email</p>
        <input
          className={css.login_form_inp}
          type="email"
          name="userEmail"
          required
          placeholder="hotmail@hotmail.com"
        />
      </label>
      <label>
        <p className={css.login_form_text}>Password</p>
        <input
          className={css.login_form_inp}
          type="password"
          name="userPassword"
          required
          placeholder="********"
          minLength={8}
        />
      </label>
      <button className={css.login_form_btn} type="submit">
        Sign in
      </button>
    </form>
  );
};

export default LoginPage;
