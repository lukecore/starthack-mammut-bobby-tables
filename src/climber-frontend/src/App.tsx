import React from 'react';
import './App.scss';
import ScatterplotXY from './components/Scatterplot/ScatterplotXY';
import ScatterplotYZ from './components/Scatterplot/ScatterplotYZ';

function App() {
  return (
    <div className="App">
      <div className="Plotts">
        <ScatterplotXY></ScatterplotXY>
        <ScatterplotYZ></ScatterplotYZ>
      </div>
    </div>
  );
}

export default App;
