import React, {Component} from 'react'
import './style.scss'

class Puppy extends Component {
   render(){
       return (
           <div className='puppy-wrapper'>
              <div className="puppy-head">
                <div className="face"></div>
                <div className="left-ear">
                  <span className="left-big-part"></span>
                  <span className="left-small-part"></span>
                </div>
                <div className="right-ear">
                  <span className="right-big-part"></span>
                  <span className="right-small-part"></span>
                </div>
              </div>
              <section></section>
              <footer></footer>
           </div>
       )
   }
}

export default Puppy