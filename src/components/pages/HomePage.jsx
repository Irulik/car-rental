import React from 'react';
import {
  MainSection,
  Title,
  Subtitle,
  Image
} from './Page.styled'; 
import carImage from '../../images/rent-car-opt.jpg';


const HomePage = () => {
    return (
        <>
    <main>
      <MainSection>
      <Title>Welcome to Car Rental</Title>
      <Subtitle>Explore our wide range of cars for rent</Subtitle>
      <Image src={carImage} alt="Car Rental" />
      <p></p>
    </MainSection>
    </main>          
        </>
    )
}

export default HomePage;
