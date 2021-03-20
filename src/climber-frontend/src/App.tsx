import React from 'react';
import './App.scss';
import Friends from './components/Friends/Friends';
import SaftyTips from './components/SaftyTips/SaftyTips';
import ScatterplotXY from './components/Scatterplot/ScatterplotXY';
import ScatterplotYZ from './components/Scatterplot/ScatterplotYZ';

function App() {
  return (
    <div className="App">
      <div className="Plotts">
        <ScatterplotXY></ScatterplotXY>
        <ScatterplotYZ></ScatterplotYZ>
      </div>
      <SaftyTips></SaftyTips>
      <Friends></Friends>
    </div>
  );
}

export default App;
