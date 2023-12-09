import React from 'react';
import Select from 'react-select';
import { ButtonSearch, Form, Input, InputWrap, Label, FalseInput, WrapSecondInput } from "./Filters.styled";
import { useDispatch } from 'react-redux';
import { setCarBrandFilter } from '../../redux/filter/filterSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleCarBrandChange = (selectedOption) => {
    dispatch(setCarBrandFilter(selectedOption.value));
  };

const carBrandsOptions = [
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land' }
];

  return (
    <Form>
      <Label>
        Car brand
        <Select onChange={handleCarBrandChange} options={carBrandsOptions} />
      </Label>

      <Label>
        Price/ 1 hour
        <Select />
      </Label>

      <Label>
        <FalseInput $left='18px'>To</FalseInput>
        <FalseInput $left='75px'>$</FalseInput>
      </Label>

      <InputWrap>
        <Label>
          Car mileage / km
          <Input type="number" />
          <span></span>
          <FalseInput>From</FalseInput>
        </Label>

        <WrapSecondInput>
          <Input type="number" />
          <span></span>
          <FalseInput>To</FalseInput>
        </WrapSecondInput>
      </InputWrap>

      <ButtonSearch>Reset</ButtonSearch>
      <ButtonSearch>Search</ButtonSearch>
    </Form>
  );
};

export default Filters;
