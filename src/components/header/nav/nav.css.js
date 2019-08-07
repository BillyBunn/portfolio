import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      font-size: 1.3rem;
      text-transform: uppercase;

      & + li {
        /* margin-left: 2rem; */
      }

      a {
        background: transparent;
        display: inline-block;
        padding: 4rem 2rem;
      }
    }
  }
`;
