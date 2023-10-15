import React, { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import './Auth.css';
import { registgation } from './authSlice';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idRole, setIdrole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [avatar, setAvatare] = useState('');

  const dispatch = useAppDispatch();
  function addUser(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    dispatch(registgation({ name, email, password, idRole, phoneNumber }));
  }

  return (
    // <div className="formaRegistration">
    //   <form onSubmit={addUser} className="forRegistration">
    //     <div className="inputFormaRegistation">
    //       <input
    //         className="inputRega"
    //         placeholder="name"
    //         name="name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <input
    //         className="inputRega"
    //         placeholder="email"
    //         name="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <input
    //         className="inputRega"
    //         placeholder="password"
    //         name="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <select className="inputRega" value={idRole} onChange={(e) => setIdrole(e.target.value)}>
    //         <option>Кто ты воин?</option>
    //         <option value="1">Юридическое лицо</option>
    //         <option value="2">Физическое лицо</option>
    //         <option value="3">Водительское лицо</option>
    //       </select>
    //       <input
    //         className="inputRega"
    //         placeholder="phoneNumber"
    //         name="phoneNumber"
    //         value={phoneNumber}
    //         onChange={(e) => setPhoneNumber(e.target.value)}
    //       />
    //       <input
    //         className="inputRega"
    //         placeholder="avatar"
    //         name="avatar"
    //         value={avatar}
    //         onChange={(e) => setAvatare(e.target.value)}
    //       />
    //       <button className="buttonRega" type="submit">
    //         Зарегистрироваться
    //       </button>
    //     </div>
    //   </form>

    // </div>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-green-700 loginForm">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
          Registration
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={addUser}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-200">
              Name
            </label>
            <div className="mt-2">
              <input
                name="name"
                autoComplete="name"
                required
                value={name}
                className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
                Email address
              </label>
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
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-200">
              Who are you?
            </label>
            <select
              className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={idRole}
              onChange={(e) => setIdrole(e.target.value)}
            >
              <option value="1">Юридическое лицо</option>
              <option value="2">Физическое лицо</option>
              <option value="3">Водительское лицо</option>
            </select>
            <label className="block text-sm font-medium leading-6 text-gray-200">
              Contact number
            </label>
            <input
               className="bg-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
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

export default Registration;
