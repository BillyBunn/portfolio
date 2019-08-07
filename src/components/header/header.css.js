import styled from 'styled-components';
import { secondary, accent } from '../../constants/theme';

export const Container = styled.header`
  align-items: center;
  background: #1a232c;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 4rem;

  a {
    color: ${secondary};
    text-decoration: none;
    transition: color 0.2s ease;
    h1 {
      &:hover {
        color: ${accent};
      }
    }
  }
`;
