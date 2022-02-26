import styled from 'styled-components';

export const ButtonContainer = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  font-size: 1rem;
  padding: 0.8rem 1.2rem;
  transition: 0.1s;
  min-width: 8rem;
  ${({ theme: { fonts, colors } }) => ({
    fontFamily: fonts.family.first,
    backgroundColor: colors.yellow10,
    color: colors.yellow20,
  })}

  &:hover, &:focus {
    outline: none;
    ${({ theme: { colors } }) => ({
      boxShadow: `0 0 0 3px ${colors.yellow30}, 0 0 0 4px ${colors.yellow10}`,
    })}
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
