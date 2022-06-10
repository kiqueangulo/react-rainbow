import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import './App.css';

function App() {
  let [colors, setColors] = useState([]);
  let colorMap = colors.map((color, i) => <ColorBlock key={i} color={color} />);
  const addColor = newColor => setColors([...colors, newColor]);

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
