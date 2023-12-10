import styled from 'styled-components';

export const HeartIconWrapper = styled.div`
  svg {
    fill: ${({ isFavorite }) => (isFavorite ? 'blue' : 'black')};  
    cursor: pointer;  
  }
`;
