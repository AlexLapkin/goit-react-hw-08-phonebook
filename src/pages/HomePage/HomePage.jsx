import React from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.home_cont}>
      <h1 className={css.home_title}>Welcome to Phonebook!</h1>
      <p className={css.home_text}>
        This phonebook allows you to add, delete your contacts, and quickly find
        the desired contact by name.
      </p>
    </div>
  );
};

export default HomePage;
