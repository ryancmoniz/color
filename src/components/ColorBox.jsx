import React from 'react';
import PropTypes from 'prop-types';

const ColorBox = ({ background }) => (
  <div style={{ background }} className="ColorBox">
    <span>MORE</span>
  </div>
);

ColorBox.propTypes = {
  background: PropTypes.string.isRequired,
};

export default ColorBox;
