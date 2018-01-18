import React from 'react'
import './commentdetails.css'
import '../Head/head.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import chen from '../images/chen_xx___u105.svg'
import u631 from '../images/u631.svg'
import u110 from '../images/u110.svg'

class CommentDetails extends React.Component {
  render () {
    return (
      <div className="commentdetails">
        <div className="head">
          <Link to='/HomePage'>
            <img src={上一页} alt=""/>
          </Link>
          <span>评论详情</span>
        </div>
        <div className="main">
          <div className="comment title">评论：(261)</div>
          <div className="comment">
            <div className="top">
              <img className='head11' src={chen} alt=""/>
              <span>H.H</span>
              <img className='sex' src={u110} alt=""/>
            </div>
            <p>古根海姆博物馆的外部非常朴实无华，只是将博物馆的名字装饰了一下。平滑的白色混凝土覆盖在墙上，使它们仿佛更像一座巨大的雕塑而不是建筑物。</p>
            <span><span>BIG.BOSS</span>:把你的回复读完之后我想去看一看了</span>
          </div>
          <div className="comment">
            <div className="top">
              <img className='head11' src={u631} alt=""/>
              <span>五海</span>
              <img className='sex' src={u110} alt=""/>
            </div>
            <p>光是建筑外观就与众不同啊！</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default CommentDetails;
