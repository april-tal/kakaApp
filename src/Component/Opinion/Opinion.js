import React from 'react'
import './opinion.css'
import '../Head/head.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import u678 from '../images/u678.png'

class Opinion extends React.Component {
  render () {
    return (
      <div className="opinion">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          <span>意见反馈</span>
        </div>
        <div className="main">
          <p>请选择反馈类型</p>
          <div className="problem">
            账号问题
            <img src={u678} alt=""/>
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder='最多输入30字...'></textarea>
          <div className="problem">
            功能反馈及其他
          </div>
          <div className="problem">
            积分兑换问题
          </div>
          <div className="problem">
            充值问题
          </div>
          <Link to='/Personal'>
            提交
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Opinion;
