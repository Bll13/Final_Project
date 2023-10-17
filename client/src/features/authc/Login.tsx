/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../Store/store';
import { loginThunk } from './authSlice';
import type { UserLogin } from './type';

function Login(): JSX.Element {
  const [password, setPassword] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserLogin>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<UserLogin> = (data) => {
    dispatch(loginThunk(data));
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-green-700 loginForm">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-trash-can-vector-illustration-with-filled-line-design-isolated-on-white-png-image_5231139.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register('email', {
                  required: 'Поле к обязательно к заполнению',
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
              <label className=" block text-sm font-medium leading-6 text-gray-200">Password</label>
            </div>
            <div className="mt-2">
              <input
                type={password ? 'text' : 'password'}
                {...register('password', {
                  required: 'Поле к обязательно к заполнению',
                  minLength: { value: 5, message: 'Неверный пароль' },
                })}
                className=" bg-gray-300 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p onClick={() => setPassword((prev) => !prev)}>Показать пароль</p>
            </div>
            <div>{errors?.password && <p>{errors?.password?.message || 'Неверный пароль'}</p>}</div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
