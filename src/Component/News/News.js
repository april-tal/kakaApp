import React from 'react'
import './news.css'
import Header1 from '../Header1/Header1'
import Footer from '../Footer/Footer'
import u343 from '../images/u343.svg'
import 资源31 from '../images/资源 31.png'

class News extends React.Component {
  render () {
    return (
      <div className="news">
        <Header1 />
        <div className="information">
          <img src={u343} alt=""/>
          <span>初夏</span>
          <p>在吗？<span>昨天17:43</span></p>
        </div>
        <div className="information">
          <img src={资源31} alt=""/>
          <span>系统通知</span>
          <p>30 秒带你体验随享咔咔<span>下午01:25</span></p>
        </div>
        <div className="information">
          <img src={u343} alt=""/>
          <span>欢迎加入随享咔咔</span>
          <p>主人，小咔已恭候多时了，200 积分奉上，可在钱包查收。有任何建议可直接在消息中回复小咔。<span>2017-01-15</span></p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default News;
