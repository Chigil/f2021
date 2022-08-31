import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Registration = () => {
  const path = useLocation();
  const isLogin = path.pathname === "/login";
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='row'>
      <input placeholder='Input value' value={login} onChange={(event) => setLogin(event.target.value)} />
      <input placeholder='Input password' value={password} onChange={(event) => setPassword(event.target.value)} />
      {
        isLogin ?
          <div>
            <Link to='registration'>Don't have a account? Registration!</Link>
          </div>
          :
          <div>
            <Link to='login'>Have a account? Loin!</Link>
          </div>
      }
    </div>
  );
};

export default Registration;