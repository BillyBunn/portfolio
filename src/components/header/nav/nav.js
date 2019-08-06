import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { accent } from '../../../constants/theme';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about" activeStyle={{ color: accent }}>
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" activeStyle={{ color: accent }}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" activeStyle={{ color: accent }}>
          Contact
        </Link>
      </li>
      <li>
        <a href="https://github.com/billybunn">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
