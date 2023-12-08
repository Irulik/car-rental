import React from 'react';
// import { useParams } from 'react-router-dom';
// import { CarItem } from '../CarItem/CarItem';
import { CardsStyle, LoadMore } from './CarsList.styled';
import CarItem from '../CarItem/CarItem';
import { CarHelper } from '../Helpers/CarHelper'; 

const CarsList = () => {
  return (
    <>
      <main className='section'>
        <div className='container'>
          <ul className={CardsStyle}>
            {CarHelper.map((car) => (
              <CarItem key={car.id} car={car} />
            ))}
          </ul>
        </div>
        <LoadMore>Load more</LoadMore>
      </main>
    </>
  );
}

export default CarsList;