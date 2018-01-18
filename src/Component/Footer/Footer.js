import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import sy from '../images/u14.png'
import sy1 from '../images/u9.png'
import fx from '../images/u21.png'
import fx1 from '../images/u26.png'
import fb from '../images/u32.png'
import fb1 from '../images/u38.png'
import xx from '../images/info.png'
import xx1 from '../images/u48.png'
import wd from '../images/u52.png'
import wd1 from '../images/u58.png'

class Footer extends React.Component {
  state = {
    active:false
  }

  render () {
    return (
      <div className="footer">
        <div className="icon">
          <Link to='/HomePage'>
            <img src={ sy } alt=""/>
          </Link>
          <Link to='/Find'>
            <img src={ fx } alt=""/>
          </Link>
          <Link to='/HomePage'>
            <img className='fb' src={ fb } alt=""/>
          </Link>
          <Link to='/News'>
            <img className='info' src={ xx } alt=""/>
          </Link>
          <Link to='/Personal'>
            <img className='wd' src={ wd } alt=""/>
          </Link>
        </div>
        <div className="word">
          <Link to='/HomePage'>
            <span className='sy'>首页</span>
          </Link>
          <Link to='/Find'>
            <span className='fx'>发现</span>
          </Link>
          <Link to='/HomePage'>
            <span className='fb'>发布</span>
          </Link>
          <Link to='/News'>
            <span className='xx'>消息</span>
          </Link>
          <Link to='/Personal'>
            <span className='wd'>我的</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Footer;
