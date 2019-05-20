import React, {Component} from 'react'
import './style.scss'

class CakeAnimation extends Component{
   static defaultProps ={
       outStyle:{},
       imageStyle:{},
       imageUrl:''
   }

   render(){
       return (
           <div style={this.props.outStyle}
           className="animation-img">
             <img style={this.props.imageStyle} src={this.props.imageUrl} alt="img"/>
           </div>
       )
   }
}

export default CakeAnimation