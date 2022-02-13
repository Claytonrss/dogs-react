import styled from 'styled-components';

export const StyledCode = styled.code`
  display: block;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.darkElevated};
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
`;
