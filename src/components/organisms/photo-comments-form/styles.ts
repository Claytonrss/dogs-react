import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  textarea {
    display: block;
    width: 100%;
    font-size: 1rem;
    resize: none;
    padding: 0.5rem;
    border-radius: 0.2rem;
    transition: 0.2s;
    ${({ theme: { fonts, colors } }) => ({
      backgroundColor: colors.gray10,
      border: `1px solid ${colors.gray10}`,
      fontFamily: fonts.family.first,
    })}

    &:hover, &:focus {
      outline: none;
      ${({ theme: { colors } }) => ({
        borderColor: colors.yellow10,
        backgroundColor: colors.white,
        boxShadow: `0 0 0 3px ${colors.yellow30}`,
      })}
    }
  }
  button {
    border: none;
    cursor: pointer;
    padding: 0 1rem;
    font-size: 1rem;
    overflow: hidden;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.colorText};

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover,
    &:focus {
      svg {
        path {
          fill: ${({ theme }) => theme.colors.yellow30};
          stroke: ${({ theme }) => theme.colors.yellow10};
        }
        g.latir {
          animation: latir 0.6s infinite;

          @keyframes latir {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
