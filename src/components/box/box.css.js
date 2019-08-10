import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  margin: ${({ centered }) => (centered ? '0 auto' : '0')};
  max-width: ${({ fluid }) => (fluid ? 'none' : '700px')};
`;
