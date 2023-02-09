import React, { createContext, useEffect, useReducer } from 'react';
import { projectAuth } from '../firebase/config';

// const AuthContext = React.createContext({
//   token: '',
//   isLoggedIn: false,
//   login: token => {},
//   logout: () => {},
//   userFirstName: '',
//   userLastName: '',
// });

// export const AuthContextProvider = ({ children }) => {
//   const initialToken = localStorage.getItem('token');
//   const [token, setToken] = useState(initialToken);

//   const userIsLoggedIn = !!token;

//   const handleLogin = token => {
//     setToken(token);
//     localStorage.setItem('token', token);
//   };

//   const handleLogout = () => {
//     setToken(null);
//     localStorage.removeItem('token');
//   };

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: handleLogin,
//     logout: handleLogout,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };

    case 'LOGOUT':
      return { ...state, user: null };

    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };

    case 'CHANGE_PASSWORD':
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged(user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    });
  }, []);

  console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
