import { useContext, useState } from 'react';
import { projectAuth } from '../firebase/config';
import AuthContext from '../store/auth.context';

export const useChangePassword = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const changePassword = async newPassord => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await projectAuth;
      console.log(res);
      await res.currentUser.updatePassword(newPassord);
      dispatch({ type: 'CHANGE_PASSWORD', payload: res.user });

      setError(null);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { changePassword, error, isLoading };
};
