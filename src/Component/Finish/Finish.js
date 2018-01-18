import React from 'react'
import '../Head/head.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import u632 from '../images/u632.png'

class Finish extends React.Component {
  render () {
    return (
      <div className="finish">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          <span>已完成任务</span>
        </div>
        <div className="main">
          <img src={u632} alt=""/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Finish;
