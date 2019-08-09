import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ items, clickable }) => {
  return (
    <Container>
      {items.map(item => (
        <Item {...item} key={uuid.v4()} clickable={clickable} />
      ))}
    </Container>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickable: PropTypes.bool,
};

export default Gallery;
