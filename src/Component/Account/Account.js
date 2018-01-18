import React from 'react'
import './account.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import u794 from '../images/u794.png'
import ewe from '../images/ewe.png'
import eds from '../images/eds.png'
import 资源22 from '../images/资源22.png'
import 资源35 from '../images/资源35.png'
import 资源36 from '../images/资源36.png'

class Account extends React.Component {
  render () {
    return (
      <div className="account">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          我的账户
          <img src={u794} alt=""/>
        </div>
        <div className="detailed">
          <div className="list">
            <img src={ewe} alt=""/>
            <div className="money">
              <p>现金余额</p>
              <p>26.60</p>
            </div>
            <Link to='/IntegralRecharge'>
              <span>提现</span>
            </Link>
          </div>
          <div className="list">
            <img src={eds} alt=""/>
            <div className="money">
              <p>积分余额</p>
              <p>180.00</p>
            </div>
            <Link to='/Exchange'>
              <span>兑现</span>
            </Link>
          </div>
          <img src={资源22} alt=""/>
          <div className="more">
            <div className="option">
              <img src={资源35} alt=""/>
              <p>收支明细</p>
            </div>
            <div className="option">
              <img src={资源36} alt=""/>
              <p>常见问题</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Account;
