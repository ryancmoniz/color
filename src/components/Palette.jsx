import React from 'react';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox';

const Palette = ({ palette }) => {
  const colorBoxes = palette.colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ));
  return (
    <div className="Palette">
      {/* TODO: NAVBAR */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* TODO: FOOTER */}
    </div>
  );
};

Palette.propTypes = {
  palette: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Palette;
