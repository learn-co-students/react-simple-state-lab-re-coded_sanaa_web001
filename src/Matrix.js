import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map((val,i) => <Cell key={i} value={val} /> )// replace me and render a cell component instead!
  }

  genMatrix = () => {
    return this.props.values.map((rowVals,index) => <div key={index} className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        <h1>areeg</h1>
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values:
    [['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00']]
  
}