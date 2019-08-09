import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children, fluid, centered }) => {
  return (
    <Container fluid={fluid} centered={centered}>
      {children}
    </Container>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
};

export default Box;
