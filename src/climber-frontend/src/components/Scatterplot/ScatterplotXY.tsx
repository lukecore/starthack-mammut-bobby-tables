import React from 'react';
import styles from './Scatterplot.module.scss';
import { Scatter } from 'react-chartjs-2';

class ScatterplotXY extends React.Component<any, any> {
  constructor(props:any){
    super(props)
    this.state = {datasets:{}}
    console.log(props, "Hallo")
    this.datasets = props
    console.log(this.datasets)
  }
  

  componentDidMount() {
    //this.setState({datasets:this.props.datasets})
    console.log(this.props);
  }
  datasets = []
  colors = {
    left: "#11aaff",
    right: "#834522"
  }
  data = [
    { data: [{ x: 0, y: 1, time: "899" }, { x: 0, y: 1.5 }, { x: 0, y: 1.75 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], label: "Max Muster left", backgroundColor: this.colors.left, borderWidth: 2, showLine: true, fill: false, borderColor: this.colors.left },
    { data: [{ x: 2, y: 1 }, { x: 4, y: 3.8 }, { x: 1, y: 5.5 }, { x: 2, y: 6 }], label: "Max Muster right", backgroundColor: this.colors.right, borderWidth: 2, showLine: true, fill: false, borderColor: this.colors.right },
  ];

  options = {
    maintainAspectRatio: false,
    resonsive: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
        },
      }]
    }
  }

  componentDidUpdate(props: any) {
  }
  render() {
    console.log(this.props.datasets)
    return (
      <div key={this.props.datasets} className={`${styles.Scatterplot} ${styles.ScatterplotXY}`}>
        <Scatter data={this.props.datasets}
          options={this.options}></Scatter>)
      </div>
    );
  }
}

export default ScatterplotXY;
