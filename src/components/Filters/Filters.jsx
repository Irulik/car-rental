import React from 'react';
import Select from 'react-select';
import { ButtonSearch, Form, Input, InputWrap, Label, FalseInput, WrapSecondInput } from "./Filters.styled";

const Filters = () => {
  return (
    <Form>
      <Label>
        Car brand
        <Select />
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