import React from 'react'
import './card.css'
import '../Head/head.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import 大树根 from '../images/大树根.jpg'
import chen_xx___u105 from '../images/chen_xx___u105.svg'
import 资源22 from '../images/资源22.png'
import 分值解读 from '../images/分值解读.png'

class Card extends React.Component {
  render () {
    return (
      <div className="card">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          <span>我的名片</span>
        </div>
        <div className="main">
          <img src={大树根} alt=""/>
          <div className="down">
            <div className="portrait">
              <img src={chen_xx___u105} alt=""/>
              <p>这家伙很懒哈</p>
            </div>
            <div className="xx">
              <p>18733535695</p>
              <p>山东省 临沂市</p>
              <p>IT互联网</p>
            </div>
            <div className="fk">
              <p>访客总量：281</p>
              <p>获赞总数：96</p>
              <img src={资源22} alt=""/>
            </div>
          </div>
          <div className="fz">
            <img src={分值解读} alt=""/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Card;
