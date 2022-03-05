import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.yellow10};
  padding: 3rem 1rem 0 1rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.yellow20};

  p {
    margin-top: 1rem;
  }
`;
