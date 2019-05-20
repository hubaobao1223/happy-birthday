import React, { Component } from 'react'
import BalloonBackGround from 'components/BalloonBackGround'
import Arrow from 'components/Arrow'
import Typing from 'util/Typing'
import { Link } from 'react-router-dom'
import './style.scss'

class Envelope extends Component {

  constructor() {
    super()
    this.state = {
      typing: null,
      timeout: null,
      typingStarted: false
    }
  }

  componentDidMount() {
    let source = this.refs.content
    let output = this.refs.display
    let typing = new Typing({
      source, output
    })
    let timeout = setTimeout(() => {
      typing.start()
      this.setState({
        typingStarted: true
      })
    }, 10000)
    this.setState({
      typing: typing,
      timeout: timeout
    })
  }

  toNextPage() {
    clearInterval(this.state.timeout)
    if (this.state.typingStarted) {
      this.state.typing.finish()
    } else {
      this.state.typing.start()
      this.state.typing.finish()
    }
  }

  render() {
    return (
      <div className='envelope-container'>
        <BalloonBackGround />
        <div className='fly-bird'>
          <img src={require('image/FlyBird.png')} alt="bird"/>
        </div>
        {/* <img className="cake" src={require(image/Cake.png')}/>> */}
        <div ref='display' className='envelope-text-show' />

        <div ref='content' style={{ display: 'none' }}>
                    亲爱的宝宝，今天是我们认识的第1055天，2年10个月21天。两年多的时间不长，却让我感觉与你携手走了很久很久，
                大概这就是幸福的感觉，时光总是不经意间被拉长。 今天是我的老公大人29岁生日，祝我的老公大大生日大快乐~~~~希望我
                们以后可以继续像现在一样幸福，比现在更幸福~~~一直久久久~爱你哦❤最亲爱的老公公
        </div>
        <Link to='/LoveWorld/index'>
          <Arrow arrowWrapperColor='#77aaaeb3' onClick={this.toNextPage} />
        </Link>
      </div>
    )
  }
}

export default Envelope
