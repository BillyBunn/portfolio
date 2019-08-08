import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 4rem;
  padding: 0 2rem;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
