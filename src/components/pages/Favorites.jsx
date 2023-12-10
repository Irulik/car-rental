import React from 'react';
import { useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import { Container, Section } from "./Page.styled";

const Favorites = () => {
  const favorites = useSelector((state) => state.favoriteCars.favorites);

  return (
    <Section>
        <Container>
      <h2></h2>
      {favorites.map((favorite) => (
        <CarItem key={favorite.id} car={favorite} />
      ))}
       </Container>
    </Section>
  );
};

export default Favorites;
