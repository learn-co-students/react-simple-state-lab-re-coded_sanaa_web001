import React, { Component } from 'react';
import Cell from './Cell' ;
export default class Matrix extends Component {

  genRow = (value) => {
    return value.map(e => <Cell  value={e} />) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    return this.props.values.map(e => <div className="row">{this.genRow(e)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
   values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
