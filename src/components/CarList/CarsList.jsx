import React, { useEffect, useState } from 'react';
import { CardsStyle, LoadMore } from './CarsList.styled';
import CarItem from '../CarItem/CarItem';
import { fetchCars } from '../api/fetchCars';


const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [visibleItems, setVisibleItems] = useState(12);

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

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
  };

  return (
    <>
      <div className="container">
        <CardsStyle>
          {cars.slice(0, visibleItems).map((car) => (
            <CarItem key={car.id} car={car} />
          ))}
        </CardsStyle>
      </div>
      {visibleItems < cars.length && <LoadMore onClick={loadMoreItems}>Load more</LoadMore>}
    </>
  );
};

export default CarsList;