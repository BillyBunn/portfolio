import styled from 'styled-components';
import { accent, primaryLight, secondaryLight } from 'constants/theme';

export const Container = styled.div`
  background: ${primaryLight};
  color: ${secondaryLight};
  padding: 2rem 4rem;
  margin: 1rem 0 0 0;
  position: relative;
  text-align: center;
  transition: background-color 0.3s ease;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 1000px;
    li {
      font-size: 1.5rem;
      text-transform: uppercase;

      & + li {
        /* margin-left: 2rem; */
      }

      a {
        display: inline-block;
        font-weight: 600;
        padding: 4rem 2rem;
        text-decoration: none;
      }
    }
  }
`;
