import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Typography, Divider} from 'antd'
import './style.scss'

class Stories extends Component {

  renderParagraphs(story) {
    const {Paragraph } = Typography
    const storyPragraphs = story ? story.split('//') : []
    return (
      <React.Fragment>
        {storyPragraphs.map((paragraph,index) => {
          return (<Paragraph key={index}>{paragraph}</Paragraph>)
        })}
      </React.Fragment>
    )
  }

  renderStories() {
    const { Title} = Typography
    let list = this.props.loveWorldItems.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <Title>{item.time}</Title>
          {this.renderParagraphs(item.description)}
          <Divider />
        </React.Fragment>
      )
    })
    return (
      <Typography>{list}</Typography>
    )
  }

  render() {
    return (
      <div className='stories'>
       {this.renderStories()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loveWorldItems: state.loveWorldItems
  }
}

export default connect(mapStateToProps)(Stories)