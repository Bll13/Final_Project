/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import './Auth.css';
import { messageErr, registgation } from './authSlice';
import type { UserWithoutId } from './type';
import openEye from './img/openEye.png';
import closedEye from './img/closedEye.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../Store/store';

function Registration(): JSX.Element {
  const [password, setPassword] = useState(false);
  const [passworda, setPassworda] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const error = useSelector((store: RootState) => store.auth.errUser);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserWithoutId>({ mode: 'onBlur' });
  const addUser: SubmitHandler<UserWithoutId> = (data) => {
    if (data.password === data.passwordtwo) {
      dispatch(registgation(data));
      nav('/posts');
    } else {
      dispatch(messageErr());
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-green-700 loginForm">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
          Регистрация
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(addUser)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-200">
              Имя
            </label>

            <div className="mt-2">
              <input
                {...register('name', {
                  required: 'Обязательное поле',
                  minLength: { value: 1, message: 'Нужно больше 1 символов' },
                })}
                className="bg-gray-300 block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div> {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}</div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
              Адрес электронной почты
            </label>
            <div className="mt-2">
              <input
                {...register('email', {
                  required: 'Обязательное поле',
                })}
                type="email"
                className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div> {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">
              Пароль
            </label>
            <div className="mt-2 dav">
              <input
                type={password ? 'text' : 'password'}
                {...register('password', {
                  required: 'Обязательное поле',
                  minLength: { value: 5, message: 'Пароль должен быть больше 5 символов' },
                })}
                className="inputPasswo bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="pa" onClick={() => setPassword((prev) => !prev)}>
                <img
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="form__img-password "
                  src={showPassword ? openEye : closedEye}
                  alt="password eye"
                />
              </p>
            </div>
            <div> {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">
            Повторите пароль
            </label>
            <div className="inputPassword dav">
              <input
                type={passworda ? 'text' : 'password'}
                {...register('passwordtwo', {
                  required: 'Обязательное поле',
                  minLength: { value: 5, message: 'Пароль должен быть больше 5 символов' },
                })}
                className="inputPasswo bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="pa" onClick={() => setPassworda((prev) => !prev)}>
                <img
                  onClick={() => setShowCpassword((prev) => !prev)}
                  className="form__img-password"
                  src={showCpassword ? openEye : closedEye}
                  alt="password eye"
                />
              </p>
            </div>
            <div> {errors?.passwordtwo && <p>{errors?.passwordtwo?.message || 'Error!'}</p>}</div>
            {/* {error && <div className="form_message">{error}</div>} */}
            <div className="mt-2 dav"></div>
            <label className="block text-sm font-medium leading-6 text-gray-200">
              Кем являетесь
            </label>
            <div>
              <select
                {...register('idRole')}
                className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="1">Юридическое лицо</option>
                <option value="2">Физическое лицо</option>
                <option value="3">Водительское лицо</option>
              </select>
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-200">
              Контактный номер
            </label>
            <div>
              <input
                {...register('phoneNumber', {
                  required: 'Обязательное поле',
                  minLength: { value: 8, message: '' },
                })}
                className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div> {errors?.phoneNumber && <p>{errors?.phoneNumber?.message || 'Error!'}</p>}</div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
