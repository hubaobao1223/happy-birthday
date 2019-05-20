import React, { Component } from 'react'
import './style.scss'

class Arrow extends Component {
    static defaultProps = {
       arrowWrapperColor:"",
       arrowColor:""
    }

    render() {
        return (
            <div className="arrow" style={{background:this.props.arrowWrapperColor}}>
                <span className="arrow-line" style={{background:this.props.arrowColor}}></span>
                <span className="arrow-head" style={{background:this.props.arrowColor}}></span>
            </div>
        )
    }
}

export default Arrow