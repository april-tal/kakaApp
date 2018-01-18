import React from 'react'
import '../Head/head.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import u640 from '../images/u640.png'
import 上一页 from '../images/上一页.png'

class Release extends React.Component {
  render () {
    return (
      <div className="release">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          <span>已发布任务</span>
        </div>
        <div className="main">
          <img src={u640} alt=""/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Release;
