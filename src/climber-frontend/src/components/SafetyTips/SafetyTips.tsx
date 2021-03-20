import React from 'react';
import i18n from '../../i18n';
import fallsService from '../../services/falls.service';
import styles from './SafetyTips.module.scss';

interface IEvent {
  time?: string;
  seriousness: string
}

class SafetyTips extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = {falls:[]}
  }

  componentDidMount() {
    this.getFalls()
  }


  async getFalls() {
    const data = await fallsService.getFalls();
    this.setState({falls:data})
  }

  getHTMLEventType(event: IEvent, i:number) {
    switch (event.seriousness) {
      case "high": return (<div key={"event"+i}><p className={styles.Heavy}>!</p><p>{i18n.t("heavySeverity")}</p></div>)
      case "medium": return (<div key={"event"+i}><p className={styles.Middle}>!</p><p>{i18n.t("middleSeverity")}</p></div>)
      case "low": return (<div key={"event"+i}><p className={styles.Low}>!</p><p>{i18n.t("middleSeverity")}</p></div>)
      default: return (<div key={"event"+i}></div>)
    }
  }

  render() {

    return (
      <div className={styles.SafetyTips}>
        <h2>{i18n.t("saftyTipsTitle")}</h2>
        {this.state.falls.map(this.getHTMLEventType)}
      </div>)
  }
};

export default SafetyTips;
