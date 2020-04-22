import React from 'react';
import '../styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div className='login-container'>
      <h1>Sign in</h1>
      <label htmlFor="login">Login<input className='login' type="text" /></label>
      <label htmlFor="password">Password<input type="password" /></label>
      <button>Sign in</button>
    </div>);
}

export default LoginPage;