import React, { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import './Auth.css';
import { delThunk, registgation } from './authSlice';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idRole, setIdrole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatare] = useState('');

  const dispatch = useAppDispatch();
  function addUser(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    dispatch(registgation({ name, email, password, idRole, phoneNumber, avatar }));
  }


  return (
    <div className="formaRegistration">
      <form onSubmit={addUser} className="forRegistration">
        <div className="inputFormaRegistation">
          <input
            className="inputRega"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="inputRega"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputRega"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select className="inputRega" value={idRole} onChange={(e) => setIdrole(e.target.value)}>
            <option>Кто ты воин?</option>
            <option value="1">Юридическое лицо</option>
            <option value="2">Физическое лицо</option>
            <option value="3">Водительское лицо</option>
          </select>
          <input
            className="inputRega"
            placeholder="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="inputRega"
            placeholder="avatar"
            name="avatar"
            value={avatar}
            onChange={(e) => setAvatare(e.target.value)}
          />
          <button className="buttonRega" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>

    </div>
  );
}

export default Registration;
