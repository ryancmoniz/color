import React from 'react';
import PropTypes from 'prop-types';
import Box from './styles/Box';
import CopyButton from './styles/CopyButton';
import CopyContainer from './styles/CopyContainer';
import BoxContent from './styles/BoxContent';
import SeeMore from './styles/SeeMore';

const ColorBox = ({ background, name }) => (
  <Box style={{ background }}>
    <CopyContainer>
      <BoxContent>
        <span>{name}</span>
      </BoxContent>
      <CopyButton>Copy</CopyButton>
    </CopyContainer>
    <SeeMore>More</SeeMore>
  </Box>
);

ColorBox.propTypes = {
  background: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ColorBox;
