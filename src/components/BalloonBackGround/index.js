import React, {Component} from 'react'
import './style.scss'

class BalloonBackground extends Component {
  render() {
    return (
      <div className='balloons-wrapper'>
        <div className='balloon' />
        <div className='balloon' />
        <div className='balloon' />
        <div className='balloon' />
        <div className='balloon' />
        <div className='balloon' />
      </div>
    )
  }
}

export default BalloonBackground