import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1rem;

  input {
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray10};
    background-color: ${({ theme }) => theme.colors.gray10};
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    transition: 0.2s;

    &:focus,
    &:hover {
      outline: none;
      ${({ theme: { fonts, colors } }) => ({
        borderColor: colors.yellow10,
        backgroundColor: colors.white,
        boxShadow: `0 0 0 3px ${colors.yellow30}`,
      })}
    }
  }
  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
`;
