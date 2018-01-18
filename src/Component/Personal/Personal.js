import React from 'react'
import './personal.css'
import { Link } from 'react-router-dom'
import Header1 from '../Header1/Header1'
import Footer from '../Footer/Footer'
import sign from '../images/签到.png'
import chen from '../images/chen_xx___u105.svg'
import qiuqiu from '../images/球球.png'
import u310右 from '../images/u310右.png'
import raw from '../images/raw.png'
import wet from '../images/wet.png'
import yytr from '../images/yytr.png'
import ygs from '../images/ygs.png'
import tyt from '../images/tyt.png'
import wqee from '../images/wqee.png'
import essa from '../images/essa.png'

class Personal extends React.Component {
  render () {
    return (
      <div className="personal">
        <Header1 />
        <div className="top">
          <img className='head11' src={chen} alt=""/>
          <p>18733531695</p>
          <Link to='Card'>
            <p className='card'>我的名片</p>
          </Link>
          <span>
            <img src={sign} alt=""/>
            签到
          </span>
        </div>
        <div className="details">
          <div className="list">
            <img src={qiuqiu} alt=""/>
            <Link to='/Account'>
              我的账户
              <img src={u310右} alt=""/>
            </Link>
          </div>
          <div className="list">
            <img src={raw} alt=""/>
            <Link to='/Integral'>
              积分充值
              <img src={u310右} alt=""/>
            </Link>
          </div>
        </div>
        <div className="details">
          <div className="list">
            <img src={wet} alt=""/>
            <Link to='/Finish'>
              已完成任务
              <img src={u310右} alt=""/>
            </Link>
          </div>
          <div className="list">
            <img src={yytr} alt=""/>
            <Link to='/Release'>
              已发布任务
              <img src={u310右} alt=""/>
            </Link>
          </div>
          <div className="list">
            <img src={ygs} alt=""/>
            <Link to='/Collection'>
              我的收藏
              <img src={u310右} alt=""/>
            </Link>
          </div>
        </div>
        <div className="details">
          <div className="list">
            <img src={tyt} alt=""/>
            <Link to='/Opinion'>
              意见反馈
              <img src={u310右} alt=""/>
            </Link>
          </div>
          <div className="list">
            <img src={wqee} alt=""/>
            <Link to='/About'>
              关于我们
              <img src={u310右} alt=""/>
            </Link>
          </div>
          <div className="list">
            <img src={essa} alt=""/>
            <Link to='/SetUp'>
              设置
              <img src={u310右} alt=""/>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Personal;
