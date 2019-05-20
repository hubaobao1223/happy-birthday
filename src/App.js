import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './styles/normalize.css'
import './App.scss';
import Cube from './components/Cube'
import Puppy from './components/Puppy'
import CubeSlideShow from './components/CubesSlideShow'
import Home from './containers/Home'
import Envelope from './containers/Envelope'
import LoveWorld from './containers/LoveWorld'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" exact component={Home}></Route>
            <Route path="/Envelope" component={Envelope}></Route>
            <Route path="/LoveWorld" component={LoveWorld}></Route>
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
