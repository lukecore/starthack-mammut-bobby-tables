import React from 'react';
import './App.scss';
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
    </div>
  );
}

export default App;
