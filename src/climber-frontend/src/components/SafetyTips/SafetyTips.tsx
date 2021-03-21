import React from 'react';
import i18n from '../../i18n';
import fallsService from '../../services/falls.service';
import styles from './SafetyTips.module.scss';

interface IEvent {
  time?: string;
  seriousness: string
  top_acceleration_negative:number;
  start_time: string
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
    console.log(data)
    this.setState({falls:data})
  }

  getHTMLEventType(event: IEvent, i:number) {
    switch (event.seriousness) {
      case "high": return (<div key={"event"+i}><i className={styles.Heavy}>!</i><div><p>{i18n.t("heavySeverity")}</p><p className={styles.AdditionalInfos}>{i18n.t("acceleration") + ": "+ Math.round(event.top_acceleration_negative * 100)/100 *(-1) +"; " + i18n.t("date") +": "+ new Date(event.start_time).toLocaleDateString()}</p></div></div>)
      case "medium": return (<div key={"event"+i}><i className={styles.Middle}>!</i><div><p>{i18n.t("middleSeverity")}</p><p className={styles.AdditionalInfos}>{i18n.t("acceleration") + ": "+ Math.round(event.top_acceleration_negative * 100)/100 *(-1) +"; " + i18n.t("date") +": "+ new Date(event.start_time).toLocaleDateString()}</p></div></div>)
      case "low": return (<div key={"event"+i}><i className={styles.Low}>!</i><div><p>{i18n.t("lowSeverity")}</p><p className={styles.AdditionalInfos}>{i18n.t("acceleration") + ": "+ Math.round(event.top_acceleration_negative * 100)/100 *(-1) +"; " + i18n.t("date") +": "+ new Date(event.start_time).toLocaleDateString()}</p></div></div>)
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
