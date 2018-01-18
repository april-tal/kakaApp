import React from 'react'
import './integral.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 微信支付 from '../images/微信 支付.png'
import 支付宝 from '../images/支付宝.png'

class Integral extends React.Component {
  render () {
    return (
      <div className="integral">
        <div className="head">
          <Link to='/Personal'>
            取消
          </Link>
          <span>积分充值</span>
        </div>
        <div className="main">
          <p>10元=100积分</p>
          <p>选择充值金额</p>
          <div className="recharge">
            <p>10积分</p>
            <p>30积分</p>
            <p>50积分</p>
            <p>100积分</p>
          </div>
          <div className="recharge">
            <p>200积分</p>
            <p>500积分</p>
            <p>1000积分</p>
          </div>
          <div className="other">
            其他：<input type="text"/>积分
          </div>
          <p>选择支付方式</p>
          <div className="pay">
            <p>
              <img src={微信支付} alt=""/>
              微信支付
            </p>
            <p>
              <img src={支付宝} alt=""/>
              支付宝
            </p>
          </div>
          <p>支付金额：20元</p>
          <Link to='/Personal'>
            确定
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Integral;
