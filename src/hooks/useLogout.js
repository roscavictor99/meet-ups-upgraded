import { useContext, useState } from 'react';
import { projectAuth } from '../firebase/config';
import AuthContext from '../store/auth.context';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const logout = async () => {
    setError(null);

    try {
      await projectAuth.signOut();

      dispatch({ type: 'LOGOUT' });

      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return { logout, error };
};
