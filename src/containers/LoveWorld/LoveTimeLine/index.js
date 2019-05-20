import React, { Component } from 'react'
import { Avatar } from 'antd';
import Timeline from 'components/Timeline'
import './style.scss'

class LoveTimeline extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="content-top">
                    <div className="content-top-left">
                        <Avatar className="avatar" src={require('image/avatarchen.jpg')}></Avatar>
                        <span className="text">chan</span>
                    </div>
                    <div className="content-top-right">
                        <Avatar className="avatar" src={require('image/avatarhu.jpg')}></Avatar>
                        <span className="text">hu</span>
                    </div>
                    <img className="heart-img" src={require('image/heart.png')} alt="heart"/>
                </div>
                <div className="content-main">
                    <Timeline></Timeline>
                </div>
            </React.Fragment>
        )
    }
}

export default LoveTimeline