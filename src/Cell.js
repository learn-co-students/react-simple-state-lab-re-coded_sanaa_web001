import React, { Component } from 'react';

export default class Cell extends Component {

constructor(props) {
  super()
  this.state = {
      color: this.props.value
  }
}

 clickEvent = () => {
    const newColor = this.state.color = '#333';
    this.setState({
      color: newColor
    })
  }
render() {
    return (
    <div className="cell" style={{backgroundColor: this.state.color }} onClick={this.clickEvent}>
    {this.state.color}
    </div>
    )
}
}
