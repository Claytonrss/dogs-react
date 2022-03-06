import styled from 'styled-components';

export const CommentList = styled.ul`
  overflow-y: auto;
  word-wrap: break-word;
  padding: 0 2rem;

  &.not-logged {
    padding-bottom: 2rem;
  }
`;
export const CommentItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.2;

  b {
    margin-right: 0.2rem;
  }
`;
