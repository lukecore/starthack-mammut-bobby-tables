import './App.scss';
import Friends from './components/Friends/Friends';
import SafetyTips from './components/SafetyTips/SafetyTips';
import Header from './components/Header/Header'
import Scatterplot from './components/Scatterplot/Scatterplot'
import i18n from './i18n';
import { WhatsappIcon, TwitterIcon } from 'react-share';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Content">
        <div className="Block">
          <div className="PlotAndShare"><h1>{i18n.t("plottTitle")}</h1><div className="Social"><WhatsappIcon size="32" iconFillColor="#000" bgStyle={{fill: "#fff"}}></WhatsappIcon><TwitterIcon size="38"  iconFillColor="#000" bgStyle={{fill: "#fff"}}></TwitterIcon></div></div>
          <p>{i18n.t("plottText")}</p>
          <Scatterplot></Scatterplot>
        </div>
        <SafetyTips className="Block"></SafetyTips>
        <Friends className="Block"></Friends>
      </div>
      <footer>
        <img src="/footer.jpg" alt="footer"></img>
      </footer>
    </div>
  );
}

export default App;
