import styled from 'styled-components';

export const MainSection = styled.section`
  text-align: center;
  padding: 50px 0;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: var(--color-text-main);
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: var(--color-text-second);
  margin-bottom: 40px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  display: block; 
  margin-left: auto; 
  margin-right: auto; 
`;

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: ${props => props.$url || 'none'};
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: ${props => props.$bottom || '20px'};
  margin-top: ${props => props.$top || '0px'};

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 50px;
    margin-bottom: ${props => props.$bottom || '30px'};
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 128px;
    margin-bottom: ${props => props.$bottom || '50px'};
  }
`;

export const EmptyPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: var(--color-text-main);
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const WelcomeWrap = styled.div`
  display: flex;
  height: 100vh;
  margin-right: auto;
  padding: 15px 0px;
  font-weight: 600;
  font-size: 22px;
  color: var(--color-text-main);
  
  @media screen and (min-width: 768px) {
    font-size: 30px;
    padding: 20px 0px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;
