import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar, deleteFavoriteCar } from '../../redux/fovoriteCarsSlice/favoriteCarsSlice';
import { HeartIcon } from '../HeartIcon/HeartIcon';
import { Button, Car_card } from './CarItem.styled';
import Modal from '../Modal/Modal';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector((state) => state.favoriteCars.favorites);
  const isFavorite = favoriteCars.some((favoriteCar) => favoriteCar.id === car.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavoriteCar(car.id));
    } else {
      dispatch(addFavoriteCar(car));
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Car_card>
       <div className="Car_card_div">
        <img src={car.img} alt={`${car.make} ${car.model}`} className="car_img" />
        <div className={`svg ${isFavorite ? 'active' : ''}`} onClick={handleFavoriteClick}>
          <HeartIcon id="svg" />
        </div>
      </div>
      <div>
        <h3 className="car_title">{`${car.make} ${car.model}, ${car.year}`}</h3>
        <p className="car_text">{`${car.address} | ${car.make} | ${car.model} |${car.year} | ${car.type} | ${car.rentalCompany} | ${car.type} | ${car.functionalities}`}</p>
        <Button onClick={() => setModalIsOpen(true)}>Learn more</Button>
        <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          {/* Передайте вміст модального вікна через властивість children */}
          <h2>{car.make} {car.model}</h2>
          <p>Додайте іншу інформацію, яку ви хочете відобразити</p>
        </Modal>
      </div>
    </Car_card>
  );
};

export default CarItem;