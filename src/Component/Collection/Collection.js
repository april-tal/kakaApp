import React from 'react'
import '../Head/head.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import u656 from '../images/u656.png'

class Collection extends React.Component {
  render () {
    return (
      <div className="collection">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          <span>我的收藏</span>
        </div>
        <div className="main">
          <img src={u656} alt=""/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Collection;
