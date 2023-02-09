import React, { useRef } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useLogin } from '../hooks/useLogin';

import './AuthPage.css';

function LoginPage() {
  const { login, isLoading, error } = useLogin();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    login(emailInputRef.current.value, passwordInputRef.current.value);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text "
            id="email"
            placeholder="Enter email"
            ref={emailInputRef}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            ref={passwordInputRef}
          />
        </div>

        <div className="actions">
          {!isLoading && <button className="login-btn">Login</button>}
          {isLoading && (
            <RotatingLines
              strokeColor="#3498db"
              strokeWidth="5"
              animationDuration="0.75"
              width="48"
              visible={true}
            />
          )}
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
