import styled from 'styled-components';
import {
  primary,
  primaryLight,
  secondary,
  secondaryLight,
} from '../../constants/theme';

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;

  li {
    margin: 0.5rem;
  }
`;

export const TagButton = styled.button`
  -webkit-appearance: none;
  background-color: ${secondaryLight};
  background-color: ${({ current }) => (current ? primary : secondaryLight)};
  border-radius: 5px;
  border: none;
  color: ${({ current }) => (current ? secondary : primary)};
  /* border: 1px solid #ddd; */
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:hover {
    background-color: ${({ current }) => (!current ? secondary : null)};
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.03);
    color: ${({ current }) => (!current ? primaryLight : null)};
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
