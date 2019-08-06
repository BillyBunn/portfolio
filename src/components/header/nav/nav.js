import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { accent } from '../../../constants/theme';
import posed from 'react-pose';

const AnimatedLi = posed.li({
  hoverable: true,
  init: {
    y: 0,
  },
  hover: {
    y: -3,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 9,
    },
  },
});

const Nav = () => (
  <Container>
    <ul>
      <AnimatedLi>
        <Link to="/about" activeStyle={{ color: accent }}>
          About
        </Link>
      </AnimatedLi>
      <AnimatedLi>
        <Link to="/projects" activeStyle={{ color: accent }}>
          Projects
        </Link>
      </AnimatedLi>
      <AnimatedLi>
        <Link to="/contact" activeStyle={{ color: accent }}>
          Contact
        </Link>
      </AnimatedLi>
      <AnimatedLi>
        <a href="https://github.com/billybunn">GitHub</a>
      </AnimatedLi>
    </ul>
  </Container>
);

export default Nav;
