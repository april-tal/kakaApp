import React from 'react'
import img4 from '../images/apple-touch-icon.png'
import './login.css'
import { Link } from 'react-router-dom'
import img6 from '../images/214233911.jpg'
import img7 from '../images/1443806697.jpg'
import img8 from '../images/1512083511.jpg'
import img9 from '../images/439029545.jpg'

class Login extends React.Component {
  render () {
    return (
      <div className='getLogin'>
        <img className='login' src={ img4 } alt=""/>
        <div className='user'>
          <input type="text" placeholder='请输入手机号' />
          <input type="password" placeholder='请输入密码' />
        </div>
        <div className='reset'>
          <span className='passw'>忘记密码？</span>
          <span className='passw reS'>重置</span>
        </div>
        <Link to='/HomePage'>
          <img className='login2' src={ img6 } alt=""/>
        </Link>
        <div className='OrLine'>
          <div className='line'></div>
          <span className='or'>or</span>
          <div className='line'></div>
        </div>
        <div className="third">
          <img src={ img7 } alt=""/>
          <img src={ img8 } alt=""/>
          <img src={ img9 } alt=""/>
        </div>
        <div className="casual">
          随便看看
        </div>
      </div>
    )
  }
}

export default Login;
