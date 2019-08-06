import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'xl':
        return '300';
      case 'large':
        return '400';
      case 'medium':
        return '500';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'xl':
        return '4.5rem';
      case 'large':
        return '3.2rem';
      case 'medium':
        return '2.28rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'xl':
          return '3.6rem';
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
