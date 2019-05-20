import React, { Component } from 'react'
import AlphabetAnimation from 'components/AlphabetAnimation'
import ImageShowAnimation from 'components/ImageShowAnimation'
import BalloonBackGround from 'components/BalloonBackGround'
import HBImage from 'image/HB.png'
import WelcomeImage from 'image/Celebrate.png'
import EnvelopeImage from 'image/Envelope.png'
import {Link} from 'react-router-dom'
import './style.scss'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showIndex: 1
    }
  }

  componentDidMount() {
    let that = this
    let interval = setInterval(() => {
      const curShowIndex = that.state.showIndex
      let animateItems = Object.keys(that.refs).filter((refName) => {
        return refName.indexOf('animateItem') >= 0
      })
      if (curShowIndex === animateItems.length) {
        clearInterval(interval)
        return
      }
      that.setState({
        showIndex: curShowIndex + 1
      })
    }, 5000)
  }

  getDisplayStatus(domOrder) {
    return domOrder === this.state.showIndex ? 'block' : 'none';
  }

  render() {
    return (
      <div className='home-wrapper'>
        {/* <AlphabetAnimation></AlphabetAnimation> */}
        <BalloonBackGround />
        <div ref='animateItemText' className='animate-text-wrapper' style={{ display: this.getDisplayStatus(1) }}>
          <span>亲</span>
          <span>爱</span>
          <span>的</span>
          <span>陈</span>
          <span>先</span>
          <span>生</span>
        </div>
        <ImageShowAnimation ref='animateItemHB' outStyle={{ display: this.getDisplayStatus(2)}}
          imageUrl={require('image/chicken.gif')} />
        {/* <div ref="animateItemVideo" className="video-wrapper" style={{display: this.getDisplayStatus(2)}}>
                    <video autoPlay="autoplay" muted>
                      <source src={require(image/HappyWelcome.mp4')}/>>
                    </video>
                </div> */}
        <div ref='animateItemEnvelope' className='envelope-wrapper' style={{display: this.getDisplayStatus(3)}}>
          <span className='tip'>♡你有一封信，请点击查收♡</span>
          <Link to='/Envelope'>
            <ImageShowAnimation imageStyle={{width: '3rem'}}
              imageUrl={EnvelopeImage} />
          </Link>
        </div>
      </div>
    )
  }
}

export default Home