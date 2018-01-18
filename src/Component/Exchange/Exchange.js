import React from 'react'
import './exchange.css'
import '../IntegralRecharge/integralrecharge.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 金币 from '../images/金币.png'

class Exchange extends React.Component {
  render () {
    return (
      <div className="exchange">
        <div className="head">
          <Link to='/Account'>
            取消
          </Link>
          <span>积分兑换</span>
        </div>
        <div className="withdrawals">
          <img src={金币} alt=""/>
          <p>积分兑换</p>
          <p>
            <input type="text"/>
          </p>
          <p className='balance'>积分余额:860，<span>全部兑现</span></p>
          <Link to='/DetailsTask'>
            <span className='LoOut'>确定</span>
          </Link>
          <p className='arrival'>2小时内到账</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Exchange;
