import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 18px;
  }
`;

export const Label = styled.label`
position: relative;
  display: flex;
  flex-direction: column;
  color: var(--color-text-label);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  padding: ${props => props.$padding || '14px 14px 14px 70px'};
  margin-top: 8px;
  border-radius: ${props => props.$radius || '14px'};
  border: none;
  border-right: ${props => props.$border || 'none'};
  background-color: var(--color-filter-field);
  color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &:invalid {
    border: 1px solid red;
  }

  &:invalid + span::after {
    position: absolute;
    bottom: -20px;
    left: 0;
    content: "Only 5 digits. Min - 1 km";
    color: red;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
}
`;

export const FalseInput = styled.div`
  display: flex;
  color: var(--color-text-main);
  position: absolute;
  bottom: 14px;
  left: ${props => props.$left || '24px'};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;


export const WrapSecondInput = styled.div`
  position: relative;
`;

export const ButtonSearch = styled.button`
  display: flex;
  width: ${props => props.width || '136px'};
  height: 48px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: var(--color-button);
  color: var(--color-text-button-and-back);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: var(--color-button-hover);
  }
`;
