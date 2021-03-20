import React from 'react';
import styles from './Scatterplot.module.scss';
import  { Scatter } from 'react-chartjs-2';

class Scatterplot extends React.Component {
   data = [
    { data:[{x: 0, y: 1},{x: 2, y: 4},{x: -1, y: 5},{x: 0, y: 7}], label:"Max Muster left", backgroundColor:"#11aaff", borderWidth: 0,showLine: true, fill: false,borderColor: '#11aaff'},
    { data:[{x: 2, y: 1},{x: 4, y: 3.8},{x: 1, y: 5.5},{x: 2, y: 6}], label:"Max Muster right", backgroundColor:"#11aa00", borderWidth: 0,showLine: true, fill: false,borderColor: "#11aa00"},
  ] ;
  render(){
  return (
    <div className={styles.Scatterplot}>
    <Scatter data={{datasets:this.data} }
      options={{ maintainAspectRatio: false,scales: {
        xAxes: [{
           gridLines: {
              color: '#888',
              drawOnChartArea: false
           }
        }],
        yAxes: [{
           gridLines: {
              color: '#888',
              drawOnChartArea: false
           }
        }]
     } }}></Scatter>
    </div>
  );
  }
}

export default Scatterplot;
