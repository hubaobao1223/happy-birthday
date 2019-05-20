import React, { Component } from 'react'
import './style.scss'

class Cube extends Component {
    /**
     * props:{
     *  cubeWrapperStyle:{},
     *  cubeItemsInfo:[{style:{},text:""}]
     * }
     */
    static defaultProps = {
        cubeWrapperStyle: {},
        cubeItemsInfo: [
            { style: {background:"green"}, text: "a" },
            { style: {background:"red"}, text: "b" },
            { style: {background:"yellow"}, text: "c" },
            { style: {background:"pink"}, text: "d" },
            { style: {background:"blue"}, text: "e" },
            { style: {background:"purple"}, text: "f" }
        ]
    }

    render() {
        let itemsList= this.props.cubeItemsInfo.map(function (itemInfo, index) {
            return <div style={itemInfo.style} key={index}>{itemInfo.text}</div>
        });
        
        return (
            <div className="cube-box" style={this.props.cubeWrapperStyle}>
                {itemsList}
            </div>
        )
    }
}

export default Cube