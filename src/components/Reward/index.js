import React,{Component} from 'react'
import {Drawer,Popover} from 'antd'
import './style.scss'

class Reward extends Component{
  constructor(props){
    super(props)
    this.state={
      drawerShow:false
    }
  }

  handleClick(){
    this.setState((preState)=>{
      return {
        drawerShow:!preState.drawerShow
      }
    })
  }

  onClose(){
    this.setState({
      drawerShow:false
    })
  }
  
  renderPopoverContent(){
    return (
      <div className="popover-content">
        亲爱的,是不是快被本宝宝感动得不要不要的~~~感动了你就快快打赏~~~~嘤嘤嘤~~~~
      </div>
    )
  }

  render(){
    return (
      <React.Fragment>
        <Popover content={this.renderPopoverContent()}  placement="leftBottom">
          <div className="reward-button" onClick={this.handleClick.bind(this)}>赏</div>
        </Popover>
        <Drawer
          className="reward-drawer"
          visible={this.state.drawerShow}
          closable={false}
          onClose={this.onClose.bind(this)}
          placement="left"
          >
          <div className="wechat">
            <img src={require("../../image/WechatReward.png")} alt="wechat"/>
          </div>
          <div className="zfb">
            <img src={require("../../image/zfbReward.jpg")} alt="zfb"/>  
          </div>
        </Drawer>
      </React.Fragment>
    )
  }
}

export default Reward