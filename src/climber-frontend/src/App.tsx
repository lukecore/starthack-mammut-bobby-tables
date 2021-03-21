import './App.scss';
import Friends from './components/Friends/Friends';
import SafetyTips from './components/SafetyTips/SafetyTips';
import Header from './components/Header/Header'
import Scatterplot from './components/Scatterplot/Scatterplot'
import i18n from './i18n';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Content">
        <div className="Block">
          <h2>{i18n.t("plottTitle")}</h2>
          <Scatterplot></Scatterplot>
        </div>
        <SafetyTips className="Block"></SafetyTips>
        <Friends className="Block"></Friends>
      </div>
    </div>
  );
}

export default App;
