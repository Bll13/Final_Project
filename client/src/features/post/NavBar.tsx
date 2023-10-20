import React, { useState } from 'react';
import { delThunk } from '../authc/authSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.auth.user);
  const [view, setView] = useState(true);
  function logOut() {
    dispatch(delThunk()).catch((err) => console.log(err));
    setView(false);
    navigate('/');
    window.location.reload()
  }

  return (
    <nav aria-label="Breadcrumb navnav">
      <ol
        role="list"
        className=" navBar mx-auto flex max-w-2xl items-center space-x-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        {!user && view && (
          <button
            className="mr-2 text-sm font-medium text-gray-200"
            type="button"
            onClick={() => {
              navigate('/auth');
              setView(false);
            }}
          >
            \ Регистрация
          </button>
        )}
        {!user && view && (
          <button
            className="mr-2 text-sm font-medium text-gray-200"
            type="button"
            onClick={() => {
              navigate('/log');
              setView(false);
            }}
          >
            \ Войти
          </button>
        )}

        {user && view && (
          <button
            className="mr-2 text-sm font-medium text-gray-200"
            type="button"
            onClick={() => {
              navigate('/');
            }}
          >
            {' '}
            \ На главную
          </button>
        )}

        {user && view && (
          <button
            className="mr-2 text-sm font-medium text-gray-200"
            type="button"
            onClick={() => {
              navigate('/enti');
            }}
          >
            {' '}
            \ Пункты
          </button>
        )}
        {user && view && (
          <button
            className="mr-2 text-sm font-medium text-gray-200"
            type="button"
            onClick={() => {
              navigate('/posts')
              window.location.reload()
            }}
          >
            {' '}
            \ Объявления
          </button>
        )}
        {user && view && (
          <button
            className="mr-2 text-sm font-medium text-gray-200"
            type="button"
            onClick={() => {
              navigate('/profile');
            }}
          >
            {' '}
            \ Личный Кабинет
          </button>
        )}
        {user && view && (
          <button className="mr-2 text-sm font-medium text-gray-200" type="button" onClick={logOut}>
            \ Выйти
          </button>
        )}
      </ol>
    </nav>
  );
}

export default NavBar;
