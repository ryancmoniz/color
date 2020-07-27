import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from './MainContainer';
import ColorContainer from './ColorContainer';
import ColorBox from '../ColorBox/ColorBox';

const Palette = ({ palette }) => {
  const colorBoxes = palette.colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ));
  return (
    <MainContainer>
      {/* TODO: NAVBAR */}
      <ColorContainer>{colorBoxes}</ColorContainer>
      {/* TODO: FOOTER */}
    </MainContainer>
  );
};

Palette.propTypes = {
  palette: PropTypes.object.isRequired,
};

export default Palette;
