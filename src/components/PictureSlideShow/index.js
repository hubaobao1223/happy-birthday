import React, { Component } from 'react'
import './style.scss'

class PictureSlideShow extends Component {
    static defaultProps = {
        showPicCount:5,
        pictures: [],
        containerStyle: {}
    }

    constructor(props) {
        super(props)
        this.state={
           allPictures:props.pictures.concat([]),
           picturesToShow:[]
        }
    }

    componentDidMount(){
        this.setState({
            picturesToShow:this.state.allPictures.slice(0,this.props.showPicCount),
        })
        setInterval(()=>{
           this.setState((preState,props)=>{
              let prePictures = preState.allPictures
              let nextAllPictures = prePictures.concat(prePictures[0])
              nextAllPictures.shift()
              return{
                  picturesToShow:prePictures.slice(0,props.showPicCount),
                  allPictures:nextAllPictures
              }
           })
        },1500)
    }

    render() {
        return (
           (this.state.picturesToShow.length>0?
            (<div className="pics-slide-show" style={this.props.containerStyle}>
            {this.state.picturesToShow.map((picItem, index) => {
                return <div className="pic-item" key={index}>
                <img src={picItem.url} alt={picItem.des}/>
                </div>
            })}
             </div>):null)
        )
    }
}


export default PictureSlideShow