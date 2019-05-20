import React, { Component } from 'react'
import { connect } from 'react-redux'
import PictureSlideShow from 'components/PictureSlideShow'
import Story from 'components/Story'
import './style.scss'

class DetailStory extends Component {
  render() {

    let { currentDetailItem } = this.props
    let currentPictures = currentDetailItem.pictures
    return (
      <div className='detail-story'>
        <PictureSlideShow pictures={currentPictures}
          containerStyle={{ width: '100%', height: '4rem' }}/>
        <Story story={currentDetailItem}/>
        <div className='videos' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentDetailItem: state.currentDetailItem
  }
}


export default connect(mapStateToProps)(DetailStory)