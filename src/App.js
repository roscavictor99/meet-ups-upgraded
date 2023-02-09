import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';
import AllMeetupsPage from './pages/AllMeetupsPage';
import SignupPage from './pages/SignupPage';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import NewMeetupPage from './pages/NewMeetupPage';
import ProfilePage from './pages/ProfilePage';
import AuthContext from './store/auth.context';
import LoginPage from './pages/LoginPage';

function App() {
  const { authIsReady, user } = useContext(AuthContext);

  return (
    <>
      {authIsReady && (
        <>
          <MainNavigation />
          <Switch>
            <Route path="/" exact>
              {user && <HomePage />}
              {!user && <Redirect to="/login" />}
            </Route>

            <Route path="/signup">
              {!user && <SignupPage />}
              {user && <Redirect to="/" />}
            </Route>

            <Route path="/login">
              {!user && <LoginPage />}
              {user && <Redirect to="/" />}
            </Route>

            {user && (
              <>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/all-meetups">
                  <AllMeetupsPage />
                </Route>
                <Route path="/new-meetup">
                  <NewMeetupPage />
                </Route>
                <Route path="/favorites">
                  <FavoritesPage />
                </Route>
              </>
            )}
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
