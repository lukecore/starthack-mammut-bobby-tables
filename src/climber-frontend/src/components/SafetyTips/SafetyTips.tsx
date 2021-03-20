import React from 'react';
import i18n from '../../i18n';
import styles from './SafetyTips.module.scss';

interface IEvent {
  time?: string;
  severity: number
}

class SafetyTips extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = {events:[]}
  }

  componentDidMount() {
    this.setState({events:this.getEvents()})
  }


  getEvents() {
    return [{ time: "12345", severity: 1 }, { time: "23237", severity: 1 }, { time: "54547", severity: 2 }, { time: "78978", severity: 2 }]
  }

  getHTMLEventType(event: IEvent, i:number) {
    switch (event.severity) {
      case 1: return (<div key={"event"+i}><p className={styles.Heavy}>!</p><p>{i18n.t("heavySeverity")}</p></div>)
      case 2: return (<div key={"event"+i}><p className={styles.Middle}>!</p><p>{i18n.t("middleSeverity")}</p></div>)
      default: return (<div></div>)
    }
  }

  render() {

    return (
      <div className={styles.SafetyTips}>
        <h2>{i18n.t("saftyTipsTitle")}</h2>
        {this.state.events.map(this.getHTMLEventType)}
      </div>)
  }
};

export default SafetyTips;
