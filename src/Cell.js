import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = ()=>{
        this.setState({
            color: "#333"
        })
    }
    render() {
        return (
            <div style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}
            className="cell"
            >
            </div>
        )
    }
}
