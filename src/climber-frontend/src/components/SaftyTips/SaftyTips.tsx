import React from 'react';
import styles from './SaftyTips.module.scss';

interface IEvent {
  time?: string;
  severity: number
}

class SaftyTips extends React.Component<any, any>  {
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
      case 1: return (<div key={"event"+i}><i>Heavy</i><p></p></div>)
      case 2: return (<div key={"event"+i}><i>light</i><p></p></div>)
      default: return (<div key={"event"+i}><i>undefind</i><p></p></div>)
    }
  }

  render() {
    return (
      <div className={styles.SaftyTips}>
        {this.state.events.map(this.getHTMLEventType)}
      </div>)
  }
};

export default SaftyTips;
