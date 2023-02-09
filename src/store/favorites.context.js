import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = meetup =>
    setFavorites(prevFavorites => prevFavorites.concat(meetup));

  const handleRemoveFavorite = meetupId =>
    setFavorites(prevFavorites =>
      prevFavorites.filter(meetup => meetup.id !== meetupId)
    );

  const handleItemIsFavorite = meetupId =>
    favorites.some(meetup => meetup.id === meetupId);

  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    itemIsFavorite: handleItemIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
