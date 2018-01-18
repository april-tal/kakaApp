import React from 'react'
import '../Head/head.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import chen from '../images/chen_xx___u105.svg'
import u310右 from '../images/u310右.png'
import ico_灰色圆点 from '../images/ico_灰色圆点.png'

class SetUp extends React.Component {
  render () {
    return (
      <div className="setup">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          <span>设置</span>
        </div>
        <div className="top">
          <img className='head11' src={chen} alt=""/>
        </div>
        <div className="main">
          <Link to='/Modify'>
            <p>修改个人资料<img src={u310右} alt=""/></p>
          </Link>
          <Link to='/Password'>
            <p>修改密码<img src={u310右} alt=""/></p>
          </Link>
          <p>清除缓存<span>210MB</span></p>
          <p className='dope'>是否公开我的消息<span><img src={ico_灰色圆点} alt=""/></span></p>
          <p className='dope'>接收新消息通知<span><img src={ico_灰色圆点} alt=""/></span></p>
          <Link to='/Login' className='logOut'>
            退出登录
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default SetUp;
