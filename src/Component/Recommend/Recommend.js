import React from 'react'
import './recommend.css'
import { Link } from 'react-router-dom'
import tj1 from '../images/u647.jpg'
import tj2 from '../images/u649.jpg'
import tj3 from '../images/u651.jpg'
import eye from '../images/u298.svg'
import eye2 from '../images/u302.svg'
import eye3 from '../images/info.png'

class Recommend extends React.Component {
  render () {
    return (
      <div className="recommend">
        <div className="pic">
          <img src={tj1} alt=""/>
          <img className='second' src={tj2} alt=""/>
          <img className='three' src={tj3} alt=""/>
        </div>
        <p>所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)</p>
        <span>古根海娒美术馆</span>
        <p>
          <img src={eye} alt=""/>6326
          <img className='eye2' src={eye2} alt=""/>70
          <Link to='/CommentDetails'>
          <img className='eye3' src={eye3} alt=""/>
          </Link>
          261
        </p>
      </div>
    )
  }
}

export default Recommend;
