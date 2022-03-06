import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  #img {
    margin-bottom: 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;
export const PreviewPhoto = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;
