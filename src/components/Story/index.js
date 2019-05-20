import React,{Component} from 'react'
import {Typography} from 'antd'
import './style.scss'

const Separator = "//"

class Story extends Component{
  render(){
    const { Title, Paragraph } = Typography
    const paragraphs = this.props.story.description.split(Separator)
    return (
      <Typography className="Story">
         <Title>{this.props.story.time}</Title>
         {paragraphs.map((paragraph)=>{
           return  <Paragraph>{paragraph}</Paragraph>
         })}
      </Typography>
    )
  }
}

export default Story