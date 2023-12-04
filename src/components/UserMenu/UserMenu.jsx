import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/auth.selectors';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/services';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.user_cont}>
      <div className={css.user_cont_data}>
        <span className={css.user_cont_text}>{userData.name}</span>{' '}
        <p className={css.user_cont_text_add}>{userData.email}</p>
      </div>
      <div className={css.user_cont_btn}>
        <button className={css.user_log_btn} onClick={onLogOut}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
