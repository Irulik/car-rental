import React from 'react'
import {Button} from "./CarItem.styled";

 

const CarItem = ({ car }) => {
    
    
    const {
        id,
        make,
        model,
        year,
        img,
        rentalPrice,
        rentalCompany,
        type,
        functionalities,
        address,
        description
    } = car;

    return (
        <li className='Car_card'>
            <div className='Car_card_div'>
                <img src={img} alt={`${make} ${model}`} className='car_img' />
            </div>
            <div>
                <h3 className='car_title'>{`${make} ${model}, ${year}`}</h3>
                <p className='car_text'>{address}</p>
                <p className='car_text'>{description}</p>
                <p className='car_text'>{`Rental Price: ${rentalPrice}`}</p>
                <Button>Learn more</Button> 
            </div>
        </li>
    );
}

export default CarItem;
