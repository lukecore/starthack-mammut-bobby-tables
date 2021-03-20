import React from 'react';
import styles from './Scatterplot.module.scss';
import ScatterplotXY from './ScatterplotXY';
import ScatterplotYZ from './ScatterplotYZ';



class Scatterplot extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { datasets: [], XZPointCloud: [] };

  }
  colors = {
    left: "#11aaff",
    right: "#834522",
    preview: "#f1f1f1"
  }
  testDataXYLeft = { data: [{ x: 0, y: 1, time: "899" }, { x: 0, y: 1.5 }, { x: 0, y: 1.75 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], label: "Max Muster left", backgroundColor: this.colors.left, borderWidth: 2, showLine: true, fill: false, borderColor: this.colors.left }
  testDataXYRight = { data: [{ x: 2, y: 1 }, { x: 4, y: 3.8 }, { x: 1, y: 5.5 }, { x: 2, y: 6 }], label: "Max Muster right", backgroundColor: this.colors.right, borderWidth: 2, showLine: true, fill: false, borderColor: this.colors.right }
  
  testDataYZLeft = { data: [{ x: 0, y: 1 }, { x: 0, y: 1.5 }, { x: 0, y: 1.75 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: this.colors.left, pointRadius: 5, showLine: false, borderColor: this.colors.left, label:"left" }
  testDataYZright = { data: [{ x: 0, y: 0.75 }, { x: 0, y: 1.25 }, { x: 0, y: 2 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: this.colors.right, pointRadius: 6, showLine: false, borderColor: this.colors.right,label:"right" }
  testDataYZWall = { data: [{ x: 0, y: 1 }, { x: 0, y: 1.5 }, { x: 0, y: 1.75 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: this.colors.preview, borderWidth: 0, showLine: true, borderColor: this.colors.preview, pointRadius: 0, label:"shape", showTooltips: false }
  
  componentDidMount() {
    //REST

    this.setState({ datasetsXY: [this.testDataXYLeft, this.testDataXYRight], datasetsYZ:[this.testDataYZLeft, this.testDataYZright,this.testDataYZWall]  });
    
  }

  //TODO
  getDataDesign(data:any){
    return data.isLeft ?  {data:[data.data], label: "left", backgroundColor: this.colors.left, borderWidth: 2, showLine: true, fill: false, borderColor: this.colors.left } : { data:[data.data],label: "Max Muster right", backgroundColor: this.colors.right, borderWidth: 2, showLine: true, fill: false, borderColor: this.colors.right }
  }

  getWallProfile(data:[]){
    return {data : [], backgroundColor: this.colors.preview, borderWidth: 0, showLine: true, borderColor: this.colors.preview, pointRadius: 0, label:"shape", showTooltips: false }
  }

  render() {
    
    return (
      <div className={`${styles.Plotts}`} >
        <ScatterplotXY datasets={this.state.datasetsXY} ></ScatterplotXY>
        <ScatterplotYZ datasets={this.state.datasetsYZ}></ScatterplotYZ>
      </div>
    );
  }
}

export default Scatterplot;