import React, { useEffect, useState } from 'react';
import { CardsStyle, LoadMore } from './CarsList.styled';
import CarItem from '../CarItem/CarItem';
import { fetchCars } from '../api/fetchCars';

const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsData = await fetchCars();
        setCars(carsData);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className='section'>
        <div className='container'>
          <ul className={CardsStyle}>
            {cars.map((car) => (
               <CarItem key={car.id} car={car} />
            ))}
          </ul>
        </div>
        <LoadMore>Load more</LoadMore>
      </main>
    </>
  );
};

export default CarsList;