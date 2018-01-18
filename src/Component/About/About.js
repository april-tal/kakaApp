import React from 'react'
import './about.css'
import '../Head/head.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import apple from '../images/apple-touch-icon.png'


class About extends React.Component {
  render () {
    return (
      <div className="about">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          <span>关于我们</span>
        </div>
        <div className="main">
          <div className="logo">
            <img src={apple} alt=""/>
            <p>帮你所看 随享咔咔</p>
          </div>
          <p className='contact'>官方微信：weijichao1125</p>
          <p className='contact'>联系邮箱：727325458@qq.com</p>
          <p className='contact'>手机号码：18733535695</p>
          <div className="we">
            <p>关于我们：</p>
            <p>一个帮你实现你现在你向看所看不到的景象平台</p>
            <p>帮你了解现在所发生的真实景象</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;
