import React from 'react';
import CarsList from "../CarList/CarList";
import Filters from "../Filters/Filters";
import { Container, Section } from "./Page.styled";

 

const Catalog = () => {

  // useEffect(() => {
    // HTTP запрос если надо  
    // }, [])

    
  return (
     <>
            <Section>
                <Container $top='50px'>
                    <Filters />
                </Container>
            </Section>
            <CarsList />
        </>
    )
}

export default Catalog;
