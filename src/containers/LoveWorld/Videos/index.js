import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal} from 'antd'
import './style.scss'

class Video extends Component {

    constructor(props) {
        super(props)
        this.state = {
            videoItemShow:false,
            currentVideoSrc: ""
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {
    }


    selectVideo = (videoSrc) => {
        this.setState({
            videoItemShow:true,
            currentVideoSrc: videoSrc
        })
        this.forceUpdate()
    }

    closePlayBox = () => {
        this.setState({
            videoItemShow:false
        })
        this.forceUpdate()
    }

    render() {
        let {allVideos} = this.props
        return (
            <div className="videos-wrapper">
                {allVideos.map((video, index) => {
                    return <div className="video-item" key={index}>
                        <span className="play-icon" onClick={() => this.selectVideo(video)}>
                            <i></i>
                        </span>
                        <video muted >
                            <source src={video} />
                        </video>
                    </div>
                })}
                <Modal 
                width={1100}
                visible={this.state.videoItemShow} 
                onCancel={this.closePlayBox}
                footer={null}>
                  <div className="play-box">
                    {/* <i className="close-icon" onClick={() => this.closePlayBox()}></i> */}
                    <video ref="play-video" muted src={this.state.currentVideoSrc} controls="controls"></video>
                  </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allVideos: state.allVideos
    }
}

export default connect(mapStateToProps)(Video)