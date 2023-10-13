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
    <div>
      <div>
        <form onSubmit={loginUser}>
          <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
