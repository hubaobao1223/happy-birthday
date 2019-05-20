import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentDetailId } from 'store/action'
import { Typography } from 'antd'
import './style.scss'

class Timeline extends Component {

  handleClick(itemId) {
    this.props.setCurrentDetailId(itemId)
  }

  render() {
    let { loveWorldItems } = this.props
    const {Paragraph } = Typography
    let itemsList = loveWorldItems.map((item, index) => {
      const description = item.description.replace(new RegExp('//', 'gm'), '')
      return (<div className='timeline-item' key={index}>
        <span className='point' />
        <div className='horizon-line'>
          <span>{item.time}</span>
        </div>
        <Link to='/LoveWorld/DetailStory'>
          <div className='item-content' onClick={this.handleClick.bind(this, item.id)}>
             {item.avatar?(<img src={item.avatar} alt="avatar" className="avatar"/>):null}
            <Typography>
              <Paragraph ellipsis={{ rows: 3 }}>{description}</Paragraph>
            </Typography>
          </div>
        </Link>
      </div>
      )
    })

    return (
      <div className='timeline-wrapper'>
        <div className='vertical-line' />
        {itemsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loveWorldItems: state.loveWorldItems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentDetailId(data) {
      dispatch(setCurrentDetailId(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)