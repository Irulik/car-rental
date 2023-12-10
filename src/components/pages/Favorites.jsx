import React from 'react';
import { useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';

const Favorites = () => {
  const favorites = useSelector((state) => state.favoriteCars.favorites);

  return (
    <div>
      <h2></h2>
      {favorites.map((favorite) => (
        <CarItem key={favorite.id} car={favorite} />
      ))}
    </div>
  );
};

export default Favorites;
