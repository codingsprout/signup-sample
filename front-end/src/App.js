import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className='container'>
        <div className='form-div'>
          <form>
            <input
              type='text'
              placeholder='Full Name'
              onChange={fullNameHandler}
              value={fullName}
              className='form-control form-group'
            />

            <input
              type='text'
              placeholder='User Name'
              onChange={userNameHandler}
              value={userName}
              className='form-control form-group'
            />

            <input
              type='email'
              placeholder='Email'
              onChange={emailHandler}
              value={email}
              className='form-control form-group'
            />

            <input
              type='password'
              placeholder='password'
              onChange={passwordHandler}
              value={password}
              className='form-control form-group'
            />

            <input
              type='submit'
              className='btn btn-danger btn-block'
              value='Submit'
            />
          </form>
        </div>
      </div>
    </>
  );
}
