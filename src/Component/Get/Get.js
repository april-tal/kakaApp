import React from 'react'
import { Link } from 'react-router-dom'
import './get.css'
import img4 from '../images/apple-touch-icon.png'
import img5 from '../images/1587633075.jpg'


class Get extends React.Component {
  render () {
    return (
      <div className='getLogin'>
        <img className='login' src={ img4 } alt=""/>
        <span>随享咔咔</span>
        <p>
          <span className='word'>帮你所看</span>
          <span className='word'>随享咔咔</span>
        </p>
        <Link to='/HomePage'>
          <img className='login1' src={ img5 } alt=""/>
        </Link>
      </div>
    )
  }
}

export default Get;
