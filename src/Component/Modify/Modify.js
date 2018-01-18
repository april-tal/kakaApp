import React from 'react'
import './modify.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import chen from '../images/chen_xx___u105.svg'
import u310右 from '../images/u310右.png'

class Modify extends React.Component {
  render () {
    return (
      <div className="modify">
        <div className="head">
          <Link to='/SetUp'>
            <img src={上一页} alt=""/>
          </Link>
          <span>修改个人资料</span>
        </div>
        <div className="top">
          <img className='head11' src={chen} alt=""/>
          <Link to='Card'>
            <p className='card'>点击更换头像</p>
          </Link>
        </div>
        <div className="main">
          <div className="data">
            <span>昵称</span>
            <p>
              <span className='conte'>xx、超</span>
              <img src={u310右} alt=""/>
            </p>
          </div>
          <div className="data">
            <span>性别</span>
              <p>
                <span className='conte'>男</span>
                <img src={u310右} alt=""/>
              </p>
          </div>
          <div className="data">
            <span>年龄</span>
              <p>
                <span className='conte'>22岁</span>
                <img src={u310右} alt=""/>
              </p>
          </div>
          <div className="data">
            <span>现居地</span>
              <p>
                <span className='conte'>北京市 朝阳区</span>
                <img src={u310右} alt=""/>
              </p>
          </div>
          <div className="data">
            <span>个性签名</span>
              <p>
                <span className='conte'>江湖救急，助人为乐！</span>
                <img src={u310右} alt=""/>
              </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Modify;
