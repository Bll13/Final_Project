import React, { useState } from 'react';
import { useAppDispatch } from '../../Store/store';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idRole, setIdrole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatare] = useState('');

const dispatch=useAppDispatch()
function addUser():void{

}

  return (
    <div>
      <form onSubmit={addUser}>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input name="idRole" value={idRole} onChange={(e) => setIdrole(e.target.value)} />
        <input
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input name="avatar" value={avatar} onChange={(e) => setAvatare(e.target.value)} />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
