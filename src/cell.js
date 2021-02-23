import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {color: this.props.value} // ...define initial state with a key of 'color' set to the 'value' prop
      }
    render() {
        return (
            <div onClick={()=>this.setState({color: '#333'})} className='cell' style={{backgroundColor: this.state.color}}>
                {this.props.value}
            </div>
        )
    }
}
