import React, { Component } from 'react'
import './style.scss'

class AlphabetAnimate extends Component{
    constructor(){
        super()
        this.state = {
            alphabets:[
                {imgUrl:require("image/alphabet/H1_1.png")},
                {imgUrl:require("image/alphabet/A1_1.png")},
                {imgUrl:require("image/alphabet/P1_1.png")},
                {imgUrl:require("image/alphabet/P1_2.png")},
                {imgUrl:require("image/alphabet/Y1_1.png")},
                {imgUrl:require("image/alphabet/B1.png")},
                {imgUrl:require("image/alphabet/I1.png")},
                {imgUrl:require("image/alphabet/R1.png")},
                {imgUrl:require("image/alphabet/T1.png")},
                {imgUrl:require("image/alphabet/H1_2.png")},
                {imgUrl:require("image/alphabet/D1.png")},
                {imgUrl:require("image/alphabet/A1_2.png")},
                {imgUrl:require("image/alphabet/Y1_2.png")}
            ]
        }
    }

    render(){
        
        var alphabetsList = [];
        this.state.alphabets.forEach((alphabet,index)=>{
            alphabetsList.push(<img src={alphabet.imgUrl} key={index}/>);
        });

        return (
           <div className="alphabets-wrappper">
               {alphabetsList}
               <div className="horizon-line"></div>
           </div>
        )
    }
}


export default AlphabetAnimate