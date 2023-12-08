import styled from 'styled-components';

export const Car_card = styled.li`
  display: flex;
  width: 100%;
  width: 150px;
  flex-basis: calc((100% - 1*16px) / 2);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

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
`;

// export const Car_card_div = styled.div`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 8px;

//   @media screen and (min-width: 768px) {
//     gap: 10px;
//   }

//   @media screen and (min-width: 1440px) {
//     height: 354px;
//     gap: 14px;
//   }
// `;

// export const ImgWrap = styled.div`
//   position: relative;
//   display: block;
//   overflow: hidden;  
//   width: 100%;
//   height: 146px;
//   object-fit: cover;
//   border-radius: 14px;

//   @media screen and (min-width: 768px) {
//     height: 204px;
//   }

//   @media screen and (min-width: 1440px) {
//     height: 268px;
//   }
// `;

export const Img = styled.img`
  position: absolute;
  top: 0;
  right: -37px;
  height: 146px;
  background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;

  @media screen and (min-width: 768px) {
    height: 204px;
    right: -50px;
  }

  @media screen and (min-width: 1440px) {
    right: -65px;
    height: 268px;
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