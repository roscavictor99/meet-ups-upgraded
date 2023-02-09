import { useContext, useState } from 'react';
import { projectAuth } from '../firebase/config';
import AuthContext from '../store/auth.context';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      dispatch({ type: 'LOGIN', payload: res.user });

      setError(null);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
