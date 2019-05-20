import React, { Component } from 'react'
import { Layout ,Menu,Popover} from 'antd'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LoveTimeLine from './LoveTimeLine'
import DetailStory from './DetailStory'
import Videos from './Videos'
import Pictures from './Pictures'
import Stories from './Stories'
import Record from './Record'
import BalloonBackGround from 'components/BalloonBackGround'
import Reward from 'components/Reward'
import './style.scss'

const { Header, Content } = Layout
const menuItems = [
    { name: "首页", link: "/Index" }, 
    { name: "视频", link: "/Videos" },
    { name: "图片", link: "/Pictures" }, 
    { name: "故事", link: "/Stories" }, 
    { name:"记录", link:"/Record"}
]

class LoveWorld extends Component {

    constructor() {
        super()
        this.state = {
            menuItems: menuItems
        }
    }

    componentDidMount() {
        console.log(this.props.routes)
    }

    handleClick = (e)=> {
        const key = e.key
        const menuItem = this.state.menuItems[key]
        const nextLink = this.props.match.path + menuItem.link
        this.props.history.push(nextLink)
    }

    render() {

        let menuItemList = this.state.menuItems.map((item, index) => {
            return <Menu.Item key={index}>
                    {item.name}
                   </Menu.Item>
        })

        return (
            <div className="love-world">
                <BalloonBackGround></BalloonBackGround>
                <Layout className="layout-container">
                    <Header id="love-world-header" className="header-wrapper">
                        <span className="title">Our Love Story</span>
                        <nav className="nav-wrapper">
                            <Menu mode="horizontal" onClick={this.handleClick}>
                                {menuItemList}
                            </Menu>
                        </nav>
                    </Header>
                    <Content className="content-wrapper">
                        <Route path={`${this.props.match.path}/index`} component={LoveTimeLine}></Route>
                        <Route path={`${this.props.match.path}/DetailStory`} component={DetailStory}></Route>
                        <Route path={`${this.props.match.path}/Videos`} component={Videos}></Route>
                        <Route path={`${this.props.match.path}/Pictures`} component={Pictures}></Route>
                        <Route path={`${this.props.match.path}/Stories`} component={Stories}></Route>
                        <Route path={`${this.props.match.path}/Record`} component={Record}></Route>
                        <Reward/>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default LoveWorld