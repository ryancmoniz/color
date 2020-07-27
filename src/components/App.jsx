import React from 'react';
import Palette from './Palette/Palette';
import seedColors from '../data/seedColors';

const App = () => (
  <div>
    <Palette palette={seedColors[4]} />
  </div>
);

export default App;
