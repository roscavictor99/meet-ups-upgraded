import { useContext } from 'react';
import AuthContext from '../store/auth.context';

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return <h1 style={{ textAlign: 'center' }}>Hello, {user.displayName} </h1>;
};

export default HomePage;
