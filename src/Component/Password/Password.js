import React from 'react'
import './password.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'

class Password extends React.Component {
  render () {
    return (
      <div className="password">
        <div className="head">
          <Link to='/SetUp'>
            <img src={上一页} alt=""/>
          </Link>
          <span>修改密码</span>
        </div>
        <div className="main">
          <input type="text" placeholder='请输入原始密码' />
          <input type="text" placeholder='请输入新密码' />
          <input type="text" placeholder='请再次输入新密码' />
          <Link to='/DetailsTask'>
            <span className='LoOut'>保存</span>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Password;
