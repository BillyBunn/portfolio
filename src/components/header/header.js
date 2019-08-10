import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import { accent } from '../../constants/theme';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 15,
    },
  },
  exit: {
    y: '-100%',
    transition: {
      type: 'spring',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/" activeStyle={{ color: accent }}>
        <Title as="h1" size="large">
          {title}
        </Title>
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
