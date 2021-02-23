import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }
  

  
  render() {
    const handleClick = () => {
        this.setState({
          color: '#333'
        })
      }
    return (
      <div 
      
        style={{backgroundColor: this.state.color}}
        className="cell"
        onClick={handleClick}>
      </div>
    )
  }
  
}