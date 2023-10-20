/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { loginThunk } from './authSlice';
import type { UserLogin } from './type';
import { useNavigate } from 'react-router-dom';
import openEye from './img/openEye.png';
import closedEye from './img/closedEye.png';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../Store/store';

function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const [password, setPassword] = useState(false);
  const dispatch = useAppDispatch();

  const user = useSelector((store: RootState) => store.auth.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserLogin>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<UserLogin> = (data) => {
    dispatch(loginThunk(data));
    if (user) {
      nav('/posts');
    }
  };

  return (
    <div className="flex min-h-full    flex-col justify-center px-6 py-12 lg:px-8 bg-green-700 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
          Войдите в свой аккаунт
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
              Адрес электронной почты
            </label>
            <div className="mt-2">
              <input
                {...register('email', {
                  required: 'Обязательное поле',
                  minLength: { value: 5, message: 'Невер почта' },
                })}
                type="email"
                className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div> {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className=" block text-sm font-medium leading-6 text-gray-200">Пароль</label>
            </div>
            <div className="mt-2 dav">
              <input
                type={password ? 'text' : 'password'}
                {...register('password', {
                  required: 'Обязательное поле',
                  minLength: { value: 5, message: 'Неверный пароль' },
                })}
                className=" bg-gray-300 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              <p className="pa" onClick={() => setPassword((prev) => !prev)}>
                {' '}
                <img
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="form__img-password"
                  src={showPassword ? openEye : closedEye}
                  alt="password eye"
                />
              </p>
            </div>
            <div>{errors?.password && <p>{errors?.password?.message || 'Неверный пароль'}</p>}</div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Войти
            </button>
        
          </div>
        </form>
        <button
              type="submit"
              className="asd flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={()=>nav('/auth')}
            >
              Зарегистрироваться
            </button>
      </div>
    </div>
  );
}

export default Login;
