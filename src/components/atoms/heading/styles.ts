import styled from 'styled-components';

export const ContainerHeading = styled.h1`
  font-family: ${props => props.theme.fonts.family.second};
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.colors.yellow10};
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
