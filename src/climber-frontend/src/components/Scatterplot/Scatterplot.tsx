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
    left: "#11aaff",
    right: "#834522",
    preview: "#e1e1e1"
  }
  testDataXYLeft = { data: [
    {
        "x": 0,
        "y": 1,
        "time": "2021-03-20T19:00:13.798Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 1.5,
        "time": "2021-03-20T19:01:13.798Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 1.75,
        "time": "2021-03-20T19:02:13.798Z",
        "hand": "left"
    },
    {
        "x": -0.25,
        "y": 2.25,
        "time": "2021-03-20T19:03:13.798Z",
        "hand": "left"
    },
    {
        "x": -0.5,
        "y": 2.5,
        "time": "2021-03-20T19:04:13.798Z",
        "hand": "left"
    },
    {
        "x": -0.75,
        "y": 3,
        "time": "2021-03-20T19:05:13.798Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 3.75,
        "time": "2021-03-20T19:06:13.798Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 4.75,
        "time": "2021-03-20T19:07:13.798Z",
        "hand": "left"
    },
    {
        "x": -1,
        "y": 6,
        "time": "2021-03-20T19:08:13.798Z",
        "hand": "left"
    },
    {
        "x": -1.5,
        "y": 7,
        "time": "2021-03-20T19:09:13.798Z",
        "hand": "left"
    },
    {
        "x": -1.5,
        "y": 8,
        "time": "2021-03-20T19:10:13.798Z",
        "hand": "left"
    },
    {
        "x": -0.5,
        "y": 9,
        "time": "2021-03-20T19:11:13.798Z",
        "hand": "left"
    },
    {
        "x": 0,
        "y": 9,
        "time": "2021-03-20T19:12:13.798Z",
        "hand": "left"
    }
], label: "Max Muster left", backgroundColor: this.colors.preview, borderWidth: 1, showLine: true, fill: false, borderColor: this.colors.preview }
  testDataXYRight = { data: [
    {
        "x": 2,
        "y": 1,
        "time": "2021-03-20T19:00:13.798Z",
        "hand": "right"
    },
    {
        "x": 2,
        "y": 1.5,
        "time": "2021-03-20T19:01:13.798Z",
        "hand": "right"
    },
    {
        "x": 2,
        "y": 1.75,
        "time": "2021-03-20T19:02:13.798Z",
        "hand": "right"
    },
    {
        "x": 1.75,
        "y": 2.25,
        "time": "2021-03-20T19:03:13.798Z",
        "hand": "right"
    },
    {
        "x": 1.5,
        "y": 2.5,
        "time": "2021-03-20T19:04:13.798Z",
        "hand": "right"
    },
    {
        "x": 1.25,
        "y": 3,
        "time": "2021-03-20T19:05:13.798Z",
        "hand": "right"
    },
    {
        "x": 1,
        "y": 3.75,
        "time": "2021-03-20T19:06:13.798Z",
        "hand": "right"
    },
    {
        "x": 1,
        "y": 4.75,
        "time": "2021-03-20T19:07:13.798Z",
        "hand": "right"
    },
    {
        "x": 1,
        "y": 6,
        "time": "2021-03-20T19:08:13.798Z",
        "hand": "right"
    },
    {
        "x": 0.5,
        "y": 7,
        "time": "2021-03-20T19:12:13.796Z",
        "hand": "right"
    },
    {
        "x": 0.5,
        "y": 8,
        "time": "2021-03-20T19:12:13.797Z",
        "hand": "right"
    },
    {
        "x": 1.5,
        "y": 9,
        "time": "2021-03-20T19:12:13.798Z",
        "hand": "right"
    },
    {
        "x": 2,
        "y": 9,
        "time": "2021-03-20T19:12:13.799Z",
        "hand": "right"
    }
], label: "Max Muster right", backgroundColor: this.colors.preview, borderWidth: 1, showLine: true, fill: false, borderColor: this.colors.preview }

  testDataYZLeft = { data: [{ x: 0, y: 1 }, { x: 0, y: 1.5 }, { x: 0, y: 1.75 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: this.colors.preview, pointRadius: 5, showLine: false, borderColor: this.colors.preview, label: "left" }
  testDataYZright = { data: [{ x: 0, y: 0.75 }, { x: 0, y: 1.25 }, { x: 0, y: 2 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: this.colors.preview, pointRadius: 6, showLine: false, borderColor: this.colors.preview, label: "right" }
  testDataYZWall = { data: [{ x: 0, y: 1 }, { x: 0, y: 1.5 }, { x: 0, y: 1.75 }, { x: -0.25, y: 2.25 }, { x: -0.5, y: 2.50 }, { x: -0.75, y: 3 }, { x: -1, y: 3.75 }, { x: -1, y: 4.75 }, { x: -1, y: 6 }, { x: -1.5, y: 7 }, { x: -1.5, y: 8 }, { x: -0.5, y: 9 }, { x: 0, y: 9 }], backgroundColor: this.colors.preview, borderWidth: 0, showLine: true, borderColor: this.colors.preview, pointRadius: 0, label: "shape", showTooltips: false }

  sliderSteps = [];


  getSteps() {
    return this.testDataXYLeft.data.concat(this.testDataXYRight.data).sort((el1, el2) => new Date(el1.time) > new Date(el2.time) ? 1 : -1).map((el, i, all) => ({ value: 100/all.length*i, label:  i }))
  }
  getStepsDetails() {
    return this.testDataXYLeft.data.concat(this.testDataXYRight.data).sort((el1, el2) => new Date(el1.time) > new Date(el2.time) ? 1 : -1).map((el, i, all) => ({ ...el, value: 100/all.length*i, label:  i }))
  }

  componentDidMount() {
    //REST
    this.setState({ datasetsXY: [this.testDataXYLeft, this.testDataXYRight,{ data: [], backgroundColor: this.colors.left, pointRadius: 5, borderColor: this.colors.left, label: "left",borderWidth: 3, showLine: true, fill: false },{ data: [], backgroundColor: this.colors.right, pointRadius: 5, borderColor: this.colors.right, label: "right",borderWidth: 3, showLine: true, fill: false }], datasetsYZ: [this.testDataYZLeft, this.testDataYZright, this.testDataYZWall], datasetsXYActive:[] });

  }

  //TODO
  getDataDesign(data: any) {
    return data.isLeft ? { data: [data.data], label: "left", backgroundColor: this.colors.left, borderWidth: 2, showLine: true, fill: false, borderColor: this.colors.left } : { data: [data.data], label: "Max Muster right", backgroundColor: this.colors.right, borderWidth: 2, showLine: true, fill: false, borderColor: this.colors.right }
  }

  getWallProfile(data: []) {
    return { data: [], backgroundColor: this.colors.preview, borderWidth: 0, showLine: true, borderColor: this.colors.preview, pointRadius: 0, label: "shape", showTooltips: false }
  }
value = 0;
  getSliderValue(value:any) {
    console.log(value, this.value)
    if(Number(this.value) === Number(value)){
      this.value = value
      return value
    }else{
    this.value = value
    const steps = this.getStepsDetails();
    const node = steps[Math.round(value/100*(steps.length -1))]
    const newArray = steps.slice(0, node.label)
    
    const left = newArray.filter(el => el.hand ==="left")
    const right = newArray.filter(el => el.hand ==="right")
    const newElements = []
    newElements.push({ data: left, backgroundColor: this.colors.left, pointRadius: 5, borderColor: this.colors.left, label: "left",borderWidth: 3, showLine: true, fill: false })
    newElements.push({ data: right, backgroundColor: this.colors.right, pointRadius: 5, borderColor: this.colors.right, label: "right",borderWidth: 3, showLine: true, fill: false })
    this.setState({datasetsXY: [...this.state.datasetsXY.slice(0,2),...newElements] });
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
          marks={this.getSteps()}
        />
      </div>
    );
  }
}

export default Scatterplot;