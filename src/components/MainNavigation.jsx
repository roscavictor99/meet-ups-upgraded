import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import AuthContext from '../store/auth.context';
import FavoritesContext from '../store/favorites.context';

import './MainNavigation.css';

const MainNavigation = () => {
  const { logout } = useLogout();
  const { user } = useContext(AuthContext);

  const { totalFavorites } = useContext(FavoritesContext);

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {!user && (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink activeClassName="active" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/all-meetups">
                  All Meetups
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/new-meetup">
                  Add New Meetup
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/favorites">
                  Favorites
                  <span className="badge">{totalFavorites}</span>
                </NavLink>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
