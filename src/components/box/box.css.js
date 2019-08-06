import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  /* max-width: 700px; */

  max-width: ${({ fluid }) => (fluid ? 'none' : '700px')};
`;
