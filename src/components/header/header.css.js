import styled from 'styled-components';
import { secondary } from '../../constants/theme';

export const Container = styled.header`
  align-items: center;
  background: #1a232c;
  display: flex;
  justify-content: space-between;
  padding: 4rem;

  a {
    color: ${secondary};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: inherit;
    }
  }
`;
