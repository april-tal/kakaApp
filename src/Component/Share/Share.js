import React from 'react'
import './share.css'
import { Modal, Button } from 'antd';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 资源1 from '../images/资源1.png'
import 资源2 from '../images/资源2.png'
import 资源3 from '../images/资源3.png'
import 资源4 from '../images/资源4.png'
import 资源5 from '../images/资源5.png'
import 微信 from '../images/微信.png'
import QQ1df from '../images/QQ1df.png'
import 微博 from '../images/微博.png'

class Share extends React.Component {
  render () {
    return (
      <div className="share">
        <div id="cancelmask">
          <div className="Bomb">
            <div className='list'>
              <img src={资源1} alt=""/>
              <p>
                <span>分享到</span>
                <img src={微信} alt=""/>
                <img src={QQ1df} alt=""/>
                <img src={微博} alt=""/>
              </p>
            </div>
            <div className='list'>
              <img src={资源2} alt=""/>
              <p>
                <span>收藏</span>
              </p>
            </div>
            <div className='list'>
              <img src={资源3} alt=""/>
              <p>
                <span>隐藏此动态</span>
              </p>
            </div>
            <div className='list'>
              <img src={资源4} alt=""/>
              <p>
                <span>不看他的动态</span>
              </p>
            </div>
            <div className='list'>
              <img src={资源5} alt=""/>
              <p>
                <span>举报</span>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Share;
