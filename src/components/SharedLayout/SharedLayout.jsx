//import { Outlet } from 'react-router-dom';
//import { Suspense } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/auth.selectors';
import css from './SharedLayout.module.css';

let activeClassName = {
  color: 'red',
};

const SharedLayout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div>
      <header className={css.header}>
        <nav>
          {!authenticated ? (
            <>
              <NavLink
                className={css.header_link}
                to="/"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Home
              </NavLink>

              <NavLink
                className={css.header_link}
                to="/register"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Register
              </NavLink>
              <NavLink
                className={css.header_link}
                to="/login"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Login
              </NavLink>
            </>
          ) : (
            <></>
          )}
          {authenticated ? (
            <>
              <NavLink
                className={css.header_link}
                to="/contacts"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              ></NavLink>
            </>
          ) : (
            <></>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default SharedLayout;
