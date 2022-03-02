import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
