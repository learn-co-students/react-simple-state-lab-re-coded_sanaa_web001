// import React, { Component } from 'react'

// export default class Cell extends Component {

//     constructor(props){
//         super(props)
//         this.state={color:this.props.value}
//     }
//     updateColorState = () => {
//           this.setState='#333';
//     }
//     render() {
//         return (
//             <div onClick ={this.updateColorState} className="Cell" style={{backgroundColor:this.state.color}}>
                
//             </div>
//         )
//     }
// }
import React, { Component } from 'react';

export default class Cell extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    updateColorState = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div  onClick={this.updateColorState} className="cell" style={{backgroundColor: this.state.color}}></div>
        )
    } 

}