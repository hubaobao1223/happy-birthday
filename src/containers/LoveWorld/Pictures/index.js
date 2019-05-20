import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.scss'

class Pictures extends Component {
    render() {
        let { allPictures } = this.props
        return (<div className="pictures-wrapper">
            {allPictures.map((picture, index) => {
                return <div className="picture-item" key={index}>
                    <img src={picture.url} alt={picture.des} />
                </div>
            })}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        allPictures: state.allPictures
    }
}

export default connect(mapStateToProps)(Pictures)