import React, { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { loginThunk } from './authSlice';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  function loginUser(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
  }
  return (
    // <div>
    //   <div>
    //     <form onSubmit={loginUser}>
    //       <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //       <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //       <button type="submit">Войти</button>
    //     </form>
    //   </div>
    // </div>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-green-700 loginForm">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src='https://png.pngtree.com/png-clipart/20200224/original/pngtree-trash-can-vector-illustration-with-filled-line-design-isolated-on-white-png-image_5231139.jpg'
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={loginUser}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
              Email address
            </label>
            <div className="mt-2">
              <input
                name="email"
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className=" block text-sm font-medium leading-6 text-gray-200" 
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-gray-300 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
