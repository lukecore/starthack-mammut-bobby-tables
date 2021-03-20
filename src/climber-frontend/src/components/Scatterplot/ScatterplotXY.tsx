import React from 'react';
import styles from './Scatterplot.module.scss';
import  { Scatter } from 'react-chartjs-2';

class ScatterplotXY extends React.Component {
  colors={
    left: "#11aaff",
    right:"#834522"
  }
   data = [
    { data:[{x: 0, y: 1, time:"899"},{x: 0, y: 1.5},{x: 0, y: 1.75},{x: -0.25, y: 2.25},{x: -0.5, y: 2.50},{x: -0.75, y: 3},{x: -1, y: 3.75},{x: -1, y: 4.75},{x: -1, y: 6},{x: -1.5, y: 7},{x: -1.5, y: 8},{x: -0.5, y: 9},{x: 0, y: 9}], label:"Max Muster left", backgroundColor:this.colors.left, borderWidth: 0,showLine: true, fill: false,borderColor: this.colors.left},
    { data:[{x: 2, y: 1},{x: 4, y: 3.8},{x: 1, y: 5.5},{x: 2, y: 6}], label:"Max Muster right", backgroundColor:this.colors.right, borderWidth: 0,showLine: true, fill: false,borderColor: this.colors.right},
  ] ;

  options={
    maintainAspectRatio: false,
    legend:{
      display:false,
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    }
  }
  render(){
  return (
    <div className={`${styles.Scatterplot} ${styles.ScatterplotXY}`}>
    <Scatter data={{datasets:this.data} }
      options={this.options}></Scatter>
    </div>
  );
  }
}

export default ScatterplotXY;
