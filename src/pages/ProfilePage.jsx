import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useChangePassword } from '../hooks/useChangePassword';
import AuthContext from '../store/auth.context';
import classes from './ProfilePage.module.css';

const ProfilePage = () => {
  // const history = useHistory();
  const newPasswordInputRef = useRef();
  const confirmedPasswordInputRef = useRef();
  const { user } = useContext(AuthContext);
  const { changePassword, error, isLoading } = useChangePassword();

  // const authCtx = useContext(AuthContext);

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const enteredNewPassword = newPasswordInputRef.current.value;
  //   const confirmedNewPassword = confirmedPasswordInputRef.current.value;

  //   if (enteredNewPassword === confirmedNewPassword) {
  //     fetch(
  //       'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA67hw1b6mU-Odj6HvHaw7KhjqcfaEdUO4',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           idToken: authCtx.token,
  //           password: enteredNewPassword,
  //           returnSecureToken: false,
  //         }),
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //       }
  //     ).then(res => {
  //       history.replace('/');
  //     });
  //   } else {
  //     alert('Passwords do not match!');
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();

    changePassword(newPasswordInputRef.current.value);
  };

  return (
    <>
      <h1>Welcome {user.displayName}</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          ref={confirmedPasswordInputRef}
        />
        <button>Change Password</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default ProfilePage;
