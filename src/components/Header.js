import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: var(--purple-500);
  h1 {
    a {
      color: var(--green-fade-50);
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/thoughts">Thoughts</Link>
      </li>
    </ul>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
