import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children, fluid }) => {
  console.log({ fluid });
  return <Container fluid={fluid}>{children}</Container>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
