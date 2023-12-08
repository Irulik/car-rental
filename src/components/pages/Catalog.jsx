import React from 'react';
import CarsList from "../CarList/CarsList";
import Filters from "../Filters/Filters";
import { Container, Section } from "./Page.styled";

 

const Catalog = () => {

  return (
    <>
      <Section>
        <Container>
          <Filters />         
        </Container>
      </Section>
      <CarsList />
    </>
  );
};

export default Catalog;
