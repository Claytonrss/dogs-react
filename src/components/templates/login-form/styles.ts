import styled from 'styled-components';

export const Container = styled.section`
  form {
    margin-bottom: 2rem;
  }

  .last-password {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &::after {
      content: '';
      height: 2px;
      width: 100%;
      background: currentColor;
      display: block;
    }
  }

  .sign-up {
    margin-top: 4rem;

    h2 {
      font-size: 2rem;
      &::after {
        content: '';
        display: block;
        background: #ddd;
        width: 3rem;
        height: 0.5rem;
        border-radius: 0.2erm;
        bottom: -0.5rem;
        left: 0;
      }
    }
    p {
      margin: 2rem 0;
    }
  }
`;
