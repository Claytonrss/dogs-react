import styled from 'styled-components';

export const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background-color: ${({ theme }) => theme.colors.gray10};
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gray10};
      border-color: ${({ theme }) => theme.colors.colorText};
      outline: none;
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.yellow30};
      border-color: ${({ theme }) => theme.colors.yellow10};

      & svg > * {
        fill: ${({ theme }) => theme.colors.yellow10};
      }
    }
  }

  &.nav-mobile {
    pointer-events: none;
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;

    a,
    button,
    .active {
      font-size: 1rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      background: none;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray10};
      padding: 0.5rem 0;
      cursor: pointer;
      box-shadow: none;
      transition: 0.1s;

      svg {
        margin-right: 0.5rem;
        fill: transparent;
      }

      &:hover,
      &:focus {
        box-shadow: none;
        svg > * {
          fill: ${({ theme }) => theme.colors.yellow10};
        }
      }
    }

    button {
      border-bottom: none;
    }
  }

  &.nav-mobile-active {
    pointer-events: initial;
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
  }
`;

export const MobileButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  padding: 0;

  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  &:hover,
  &:focus,
  &.active {
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.yellow30};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.yellow10};
    color: ${({ theme }) => theme.colors.yellow10};
  }

  &.active {
    &::after {
      transform: rotate(-90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  }
`;
