import React, { useState } from 'react';
import { useAppDispatch } from '../../Store/store';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useAppDispatch()
  function loginUser():void{

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
