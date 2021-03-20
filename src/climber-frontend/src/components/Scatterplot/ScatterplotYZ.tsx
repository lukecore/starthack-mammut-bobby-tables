import React from 'react';
import styles from './Scatterplot.module.scss';
import { Scatter } from 'react-chartjs-2';

class ScatterplotYZ extends React.Component {
  colors = {
    left: "#11aaff",
    right: "#834522"
  }
  data = [
    //Shape of the route
    { data: [{ x: 0, y: 1 }, { x: 0, y: 1.5 }, { x: 0, y: 1.75 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: "#ccc", borderWidth: 0, showLine: true, borderColor: "#ccc", pointRadius: 0, label:"shape", showTooltips: false },
    //Used handles
    { data: [{ x: 0, y: 1 }, { x: 0, y: 1.5 }, { x: 0, y: 1.75 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: this.colors.left, pointRadius: 5, showLine: false, borderColor: this.colors.left, label:"left" },
    { data: [{ x: 0, y: 0.75 }, { x: 0, y: 1.25 }, { x: 0, y: 2 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: this.colors.right, pointRadius: 6, showLine: false, borderColor: this.colors.right,label:"right" },
  ];

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
        <Scatter data={{ datasets: this.data }}
          options={this.options}></Scatter>
      </div>
    );
  }
}

export default ScatterplotYZ;
