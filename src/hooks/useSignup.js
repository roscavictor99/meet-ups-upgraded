import { useContext, useState } from 'react';
import { projectAuth } from '../firebase/config';
import AuthContext from '../store/auth.context';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const signup = async (email, password, name) => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error('Could not complete signup');
      }

      await res.user.updateProfile({ displayName: name });

      dispatch({ type: 'LOGIN', payload: res.user });
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { error, isLoading, signup };
};
