import styled from 'styled-components';
import BgDog from '../../assets/images/login.jpg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }

  &::before {
    content: '';
    display: block;
    background: url(${BgDog});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const FormsContainer = styled.div`
  max-width: 30rem;
  padding: 1rem;
`;
