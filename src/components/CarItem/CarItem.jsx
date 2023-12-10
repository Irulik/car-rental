import { HeartIcon } from "../HeartIcon/HeartIcon";
import { Button, Car_card } from "./CarItem.styled";
import React from 'react';

const CarItem = ({ car }) => {
    return (
        <Car_card>
            <div className='Car_card_div'>
                <img src={car.img} alt={`${car.make} ${car.model}`} className='car_img' />
                <div className="svg">
                    <HeartIcon id="svg" />
                </div>
            </div>
            <div>
                <h3 className='car_title'>{`${car.make} ${car.model}, ${car.year}`}</h3>
                <p className='car_text'>{`${car.address} | ${car.make} | ${car.model} |${car.year} | ${car.type} | ${car.rentalCompany} | ${car.type} | ${car.functionalities}`}</p>
                {/* <p className='car_text'>{`Rental Price: ${car.rentalPrice}`}</p> */}
                <Button>Learn more</Button>
            </div>
        </Car_card>
    );
};

export default CarItem;