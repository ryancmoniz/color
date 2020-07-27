import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const ColorBox = ({ background, name }) => (
  <Box style={{ background }}>
    <span>{name}</span>
    <span>MORE</span>
  </Box>
);

ColorBox.propTypes = {
  background: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ColorBox;
