import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/ui/Layout';
import FavoritesContext from '../store/favorites.context';

const FavoritesPage = () => {
  const { totalFavorites, favorites } = useContext(FavoritesContext);

  let content;

  if (totalFavorites === 0) {
    content = <p>No favorites yet</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }

  return (
    <Layout>
      <section>
        <h1>My Favorites</h1>
        {content}
      </section>
    </Layout>
  );
};

export default FavoritesPage;
