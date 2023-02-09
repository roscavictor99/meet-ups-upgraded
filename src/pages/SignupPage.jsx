import { useRef } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useSignup } from '../hooks/useSignup';
// import AuthContext from '../store/auth.context';
import './AuthPage.css';

const SignupPage = () => {
  // const [isLoading, setIsLoading] = useState(false);

  const { signup, isLoading, error } = useSignup();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const enteredName = useRef();

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const enteredEmail = emailInputRef.current.value;
  //   const enteredPassword = passwordInputRef.current.value;

  //   setIsLoading(true);
  //   let url;
  //   if (isLogin) {
  //     url =
  //       'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA67hw1b6mU-Odj6HvHaw7KhjqcfaEdUO4';
  //   } else {
  //     url =
  //       'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA67hw1b6mU-Odj6HvHaw7KhjqcfaEdUO4';
  //   }
  //   fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: enteredEmail,
  //       password: enteredPassword,
  //       returnSecureToken: true,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => {
  //       setIsLoading(false);
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         return res.json().then(data => {
  //           let errorMessage = 'Authentication failed!';
  //           throw new Error(errorMessage);
  //         });
  //       }
  //     })
  //     .then(data => {
  //       authCtx.login(data.idToken);
  //       history.replace('/');
  //     })
  //     .catch(err => {
  //       alert(err.message);
  //     });
  // };

  const handleSubmit = e => {
    e.preventDefault();

    signup(
      emailInputRef.current.value,
      passwordInputRef.current.value,
      enteredName.current.value
    );
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
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

        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            ref={enteredName}
          />
        </div>

        <div className="actions">
          {!isLoading && <button className="login-btn">Create Account</button>}
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
};

export default SignupPage;
