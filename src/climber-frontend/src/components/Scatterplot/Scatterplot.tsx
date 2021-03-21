import {Slider} from '@material-ui/core';
import React from 'react';
import styles from './Scatterplot.module.scss';
import ScatterplotXY from './ScatterplotXY';
import ScatterplotYZ from './ScatterplotYZ';



class Scatterplot extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { datasetsXY: [], datasetsYZ: [], prefSliderVal:0 };
    this.getSliderValue = this.getSliderValue.bind(this);
  }
  colors = {
    left: "#2b84c1",
    right: "#e84855",
    preview: "#d6e4ed"
  }
  testDataXYLeft = { data: [
    {
        "x": 0,
        "y": 1,
        "time": "2021-03-20T19:00:13.705Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 1.5,
        "time": "2021-03-20T19:01:13.725Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 1.75,
        "time": "2021-03-20T19:02:13.735Z",
        "hand": "left"
    },
    {
        "x": -0.25,
        "y": 2.25,
        "time": "2021-03-20T19:03:13.745Z",
        "hand": "left"
    },
    {
        "x": -0.5,
        "y": 2.5,
        "time": "2021-03-20T19:04:13.755Z",
        "hand": "left"
    },
    {
        "x": -0.75,
        "y": 3,
        "time": "2021-03-20T19:05:13.775Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 3.75,
        "time": "2021-03-20T19:06:13.785Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 4.75,
        "time": "2021-03-20T19:07:13.795Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 6,
        "time": "2021-03-20T19:08:13.805Z",
        "hand": "left"
    },
    {
        "x": -1.5,
        "y": 7,
        "time": "2021-03-20T19:09:13.815Z",
        "hand": "left"
    },
    {
        "x": -1.5,
        "y": 8,
        "time": "2021-03-20T19:10:13.825Z",
        "hand": "left"
    },
    {
        "x": -0.5,
        "y": 9,
        "time": "2021-03-20T19:11:13.835Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 9,
        "time": "2021-03-20T19:12:13.845Z",
        "hand": "left"
    }
], label: "Max Muster left", backgroundColor: this.colors.preview, borderWidth: 1, showLine: true, fill: false, borderColor: this.colors.preview }
  testDataXYRight = { data: [
    {
        "x": 0.5,
        "y": 1,
        "time": "2021-03-20T19:00:13.700Z",
        "hand": "right"
    },
    {
        "x": 0.6,
        "y": 1.5,
        "time": "2021-03-20T19:01:13.710Z",
        "hand": "right"
    },
    {
        "x": 0.2,
        "y": 1.75,
        "time": "2021-03-20T19:02:13.720Z",
        "hand": "right"
    },
    {
        "x": -0.2,
        "y": 2.25,
        "time": "2021-03-20T19:03:13.730Z",
        "hand": "right"
    },
    {
        "x": 0.1,
        "y": 2.5,
        "time": "2021-03-20T19:04:13.740Z",
        "hand": "right"
    },
    {
        "x": 0.25,
        "y": 3,
        "time": "2021-03-20T19:05:13.750Z",
        "hand": "right"
    },
    {
        "x": -0.5,
        "y": 3.75,
        "time": "2021-03-20T19:06:13.760Z",
        "hand": "right"
    },
    {
        "x": 0.5,
        "y": 4.75,
        "time": "2021-03-20T19:07:13.770Z",
        "hand": "right"
    },
    {
        "x": 0.4,
        "y": 6,
        "time": "2021-03-20T19:08:13.780Z",
        "hand": "right"
    },
    {
        "x": 0.5,
        "y": 7,
        "time": "2021-03-20T19:09:13.790Z",
        "hand": "right"
    },
    {
        "x": 0.5,
        "y": 8,
        "time": "2021-03-20T19:10:13.800Z",
        "hand": "right"
    },
    {
        "x": 0,
        "y": 8.5,
        "time": "2021-03-20T19:11:13.810Z",
        "hand": "right"
    },
    {
        "x": 1,
        "y": 9,
        "time": "2021-03-20T19:12:13.820Z",
        "hand": "right"
    }
], label: "Max Muster right", backgroundColor: this.colors.preview, borderWidth: 1, showLine: true, fill: false, borderColor: this.colors.preview }

  testDataYZLeft = { data: [
    {
        "x": 0,
        "y": 1,
        "time": "2021-03-20T19:00:13.705Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 1.5,
        "time": "2021-03-20T19:01:13.725Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 1.75,
        "time": "2021-03-20T19:02:13.735Z",
        "hand": "left"
    },
    {
        "x": -0.25,
        "y": 2.25,
        "time": "2021-03-20T19:03:13.745Z",
        "hand": "left"
    },
    {
        "x": -0.5,
        "y": 2.5,
        "time": "2021-03-20T19:04:13.755Z",
        "hand": "left"
    },
    {
        "x": -0.75,
        "y": 3,
        "time": "2021-03-20T19:05:13.775Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 3.75,
        "time": "2021-03-20T19:06:13.785Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 4.75,
        "time": "2021-03-20T19:07:13.795Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 6,
        "time": "2021-03-20T19:08:13.805Z",
        "hand": "left"
    },
    {
        "x": -1.5,
        "y": 7,
        "time": "2021-03-20T19:09:13.815Z",
        "hand": "left"
    },
    {
        "x": -1.5,
        "y": 8,
        "time": "2021-03-20T19:10:13.825Z",
        "hand": "left"
    },
    {
        "x": -0.5,
        "y": 9,
        "time": "2021-03-20T19:11:13.835Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 9,
        "time": "2021-03-20T19:12:13.845Z",
        "hand": "left"
    }], backgroundColor: this.colors.preview, pointRadius: 5, showLine: false, borderColor: this.colors.preview, label: "left" }
  testDataYZRight = { data: [
    {
        "x": 0,
        "y": 1,
        "time": "2021-03-20T19:00:13.700Z",
        "hand": "right"
    },
    {
        "x": 0,
        "y": 1.5,
        "time": "2021-03-20T19:01:13.710Z",
        "hand": "right"
    },
    {
        "x": -0.2,
        "y": 1.75,
        "time": "2021-03-20T19:02:13.720Z",
        "hand": "right"
    },
    {
        "x": -0.35,
        "y": 2.25,
        "time": "2021-03-20T19:03:13.730Z",
        "hand": "right"
    },
    {
        "x": -0.5,
        "y": 2.5,
        "time": "2021-03-20T19:04:13.740Z",
        "hand": "right"
    },
    {
        "x": -0.9,
        "y": 3,
        "time": "2021-03-20T19:05:13.750Z",
        "hand": "right"
    },
    {
        "x": -1.2,
        "y": 3.75,
        "time": "2021-03-20T19:06:13.760Z",
        "hand": "right"
    },
    {
        "x": -1,
        "y": 4.75,
        "time": "2021-03-20T19:07:13.770Z",
        "hand": "right"
    },
    {
        "x": -0.9,
        "y": 6,
        "time": "2021-03-20T19:08:13.793Z",
        "hand": "right"
    },
    {
        "x": -1.5,
        "y": 7,
        "time": "2021-03-20T19:09:13.790Z",
        "hand": "right"
    },
    {
        "x": -1.5,
        "y": 8,
        "time": "2021-03-20T19:10:13.800Z",
        "hand": "right"
    },
    {
        "x": -0.5,
        "y": 8.5,
        "time": "2021-03-20T19:11:13.810Z",
        "hand": "right"
    },
    {
        "x": 0,
        "y": 9,
        "time": "2021-03-20T19:12:13.820Z",
        "hand": "right"
    }], backgroundColor: this.colors.preview, pointRadius: 6, showLine: false, borderColor: this.colors.preview, label: "right" }
  testDataYZWall = { data: this.testDataYZLeft.data.concat(this.testDataYZRight.data).sort(el => el.y), backgroundColor: this.colors.preview, borderWidth: 0, showLine: true, borderColor: this.colors.preview, pointRadius: 0, label: "shape", showTooltips: false }


  getStepsXY() {
    return this.testDataXYLeft.data.concat(this.testDataXYRight.data).sort((el1, el2) => new Date(el1.time) > new Date(el2.time) ? 1 : -1).map((el, i, all) => ({ value: 100/all.length*i, label:  i%4 !== 0 ? "": Math.round(new Date(new Date(el.time).getTime() - new Date(all[0].time).getTime()).getTime()/1000/60) + "min"}))
  }
  getStepsDetailsXY() {
    return this.testDataXYLeft.data.concat(this.testDataXYRight.data).sort((el1, el2) => new Date(el1.time) > new Date(el2.time) ? 1 : -1).map((el, i, all) => ({ ...el, value: 100/all.length*i, label:  i }))
  }
  getStepsDetailsYZ() {
    return this.testDataYZLeft.data.concat(this.testDataYZRight.data).sort((el1, el2) => new Date(el1.time) > new Date(el2.time) ? 1 : -1).map((el, i, all) => ({ ...el, value: 100/all.length*i, label:  i }))
  }

  componentDidMount() {
    //REST
    this.setState({ datasetsXY: [this.testDataXYLeft, this.testDataXYRight], datasetsYZ: [this.testDataYZWall], datasetsXYActive:[] });

  }

  value = 0;
  getSliderValue(value:any) {
    if(Number(this.value) === Number(value)){
      this.value = value
      return value
    }else{
    this.value = value

    //Left and right movements
    const stepsxy = this.getStepsDetailsXY();
    const nodexy = stepsxy[Math.round(value/100*(stepsxy.length -1))]
    const newArrayXY = stepsxy.slice(0, nodexy.label)
    
    const leftxy = newArrayXY.filter(el => el.hand ==="left")
    const rightxy = newArrayXY.filter(el => el.hand ==="right")
    const newElementsXY = []
    newElementsXY.push({ data: leftxy, backgroundColor: this.colors.left, pointRadius: 5, borderColor: this.colors.left, label: "left",borderWidth: 3, showLine: true, fill: false })
    newElementsXY.push({ data: rightxy, backgroundColor: this.colors.right, pointRadius: 5, borderColor: this.colors.right, label: "right",borderWidth: 3, showLine: true, fill: false })
    let newStateXY:any = []
    if(this.state.datasetsXY.length === 2){
       newStateXY = [...newElementsXY, ...this.state.datasetsXY.slice(0,2)]
    }else if(this.state.datasetsYZ.length > 1){
       newStateXY = [...newElementsXY, ...this.state.datasetsXY.slice(2,4)]
    }



    //Overhang view
    const stepsyz = this.getStepsDetailsYZ();
    const nodeyz = stepsyz[Math.round(value/100*(stepsyz.length -1))]
    const newArrayYZ = stepsyz.slice(0, nodeyz.label)
    
    const left = newArrayYZ.filter(el => el.hand ==="left")
    const right = newArrayYZ.filter(el => el.hand ==="right")
    const newElementsYZ = []
    newElementsYZ.push({ data: left, backgroundColor: this.colors.left, pointRadius: 5, borderColor: this.colors.left, label: "left colored",borderWidth: 3, showLine: true, fill: false })
    newElementsYZ.push({ data: right, backgroundColor: this.colors.right, pointRadius: 5, borderColor: this.colors.right, label: "right colored",borderWidth: 3, showLine: true, fill: false })
    let newStateYZ:any = []
    if(this.state.datasetsYZ.length ===1){
       newStateYZ = [...newElementsYZ, ...this.state.datasetsYZ.slice(0,1)]
    }else if(this.state.datasetsYZ.length > 1){
       newStateYZ = [...newElementsYZ, ...this.state.datasetsYZ.slice(2,3)]
    }

    this.setState({datasetsXY: newStateXY , datasetsYZ: newStateYZ });
    return value
    }
  }

  render() {

    return (
      <div >
        <div className={`${styles.Plotts}`} >
          <ScatterplotXY datasets={this.state.datasetsXY} ></ScatterplotXY>
          <ScatterplotYZ datasets={this.state.datasetsYZ}></ScatterplotYZ>
        </div>
        <Slider
          defaultValue={0}
          getAriaValueText={this.getSliderValue}
          aria-labelledby="discrete-slider-custom"
          step={3}
          marks={this.getStepsXY()}
        />
      </div>
    );
  }
}

export default Scatterplot;