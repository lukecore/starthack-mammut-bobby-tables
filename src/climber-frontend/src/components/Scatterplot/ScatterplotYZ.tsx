import React from 'react';
import styles from './Scatterplot.module.scss';
import { Scatter } from 'react-chartjs-2';

class ScatterplotYZ extends React.Component<any, any> {
  options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
      }]

    }
  }
  render() {
    return (
      <div className={`${styles.Scatterplot} ${styles.ScatterplotYZ}`}>
        <Scatter data={{ datasets: this.props.datasets }}
          options={this.options}></Scatter>
      </div>
    );
  }
}

export default ScatterplotYZ;
