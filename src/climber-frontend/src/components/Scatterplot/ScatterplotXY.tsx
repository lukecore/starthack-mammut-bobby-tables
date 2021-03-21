import React from 'react';
import styles from './Scatterplot.module.scss';
import { Scatter } from 'react-chartjs-2';

class ScatterplotXY extends React.Component<any, any> {

  options = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 0
    },
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
  render() {
    return (
      <div key={this.props.datasets} className={`${styles.Scatterplot} ${styles.ScatterplotXY}`}>
        <Scatter data={{ datasets: this.props.datasets }}
          options={this.options}></Scatter>)
      </div>
    );
  }
}

export default ScatterplotXY;
