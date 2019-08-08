import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ items, clickable }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} clickable={clickable} />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickable: PropTypes.bool,
};

export default Gallery;
