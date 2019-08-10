import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      /* font-size: 1.3rem; */
      /*   font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
 */
      font-size: calc(1.2rem + (4 - 0.8) * ((100vw - 300px) / (1600 - 300)));

      text-transform: uppercase;

      & + li {
        /* margin-left: 2rem; */
      }

      a {
        background: transparent;
        display: inline-block;
        padding: 4rem 3vw;
      }
    }
  }
`;
