import styled from 'styled-components';

export const Container = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  & > div,
  span {
    grid-area: 1/1;
  }

  span {
    background-color: rgba(0, 0, 0, 0.3);
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 10px;
      margin-right: 0.25rem;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.18983 5.29481C1.09786 5.18688 1.01611 5.08789 0.945133 5C1.01611 4.91211 1.09786 4.81312 1.18983 4.70519C1.57157 4.2572 2.12463 3.66075 2.80908 3.06622C4.1994 1.85858 6.02663 0.75 8 0.75C9.97337 0.75 11.8006 1.85858 13.1909 3.06622C13.8754 3.66075 14.4284 4.2572 14.8102 4.70519C14.9021 4.81312 14.9839 4.91211 15.0549 5C14.9839 5.08789 14.9021 5.18688 14.8102 5.29481C14.4284 5.7428 13.8754 6.33925 13.1909 6.93378C11.8006 8.14142 9.97337 9.25 8 9.25C6.02663 9.25 4.1994 8.14142 2.80908 6.93378C2.12463 6.33925 1.57157 5.7428 1.18983 5.29481Z' stroke='white' stroke-width='1.5'/%3E%3Ccircle cx='8' cy='5' r='2' fill='white'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
    }
  }

  &:hover {
    span {
      display: flex;
    }
  }

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;

    @media (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  @media (max-width: 40rem) {
    grid-column: initial;
    grid-row: initial;
  }
`;
