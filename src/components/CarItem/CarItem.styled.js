import styled from 'styled-components';

export const CarCard = styled.li`
  position: relative;
  flex-basis: calc((100% - 1*16px) / 2);
  
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2*20px) / 3);
    gap: 20px;
    width: 209px;
  }

  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 426px;
    gap: 28px;
    flex-basis: calc((100% - 3*29px) / 4);
  }

  .Car_card_div {
    position: relative;
    margin-bottom: 14px;
  }

  .svg {
    position: absolute;
    top: 14px;
    right: 14px;
  }

  img {
    width: 100%;
    height: 268px;
    object-fit: cover;
    background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;
    border-radius: 14px;
  }

  .Car_desc {
    margin-top: 14px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 16px;
  }

  button {
    position: absolute;
    bottom: 0;
  }

  p {
    opacity: 50%;
    height: 40px;
    overflow: hidden;
  }
`;

export const Button = styled.button`
  display: flex;
  width: ${props => props.width || '100%'};
  height: 44px;
  padding: 12px;
  justify-content: center;
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
