import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.gray10};
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: ${props => props.theme.fonts.family.first};
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gray10};
    border-color: ${({ theme }) => theme.colors.colorText};
  }
`;
