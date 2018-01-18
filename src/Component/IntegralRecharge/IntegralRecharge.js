import React from 'react'
import './integralrecharge.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

class IntegralRecharge extends React.Component {
  render () {
    return (
      <div className="integralrecharge">
        <div className="head">
          <Link to='/Account'>
            取消
          </Link>
          <span>零钱提现</span>
        </div>
        <div className="withdrawals">
          <p>
            <span>到银行卡</span>
            <span className='CardNumber'>工商银行(9647)</span>
          </p>
          <p className='service'>提现到工商银行，手续费0.2%</p>
          <p>
            <span>到微信账号</span>
            <span>午后的阳光（5695）</span>
          </p>
          <p>提现金额</p>
          <p>
            <span className='money'>￥</span>
            <input type="text"/>
          </p>
          <p className='balance'>现金余额:86.00，<span>全部提现</span></p>
          <Link to='/DetailsTask'>
            <span className='LoOut'>提现</span>
          </Link>
          <p className='arrival'>2小时内到账</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default IntegralRecharge;
