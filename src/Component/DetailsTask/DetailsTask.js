import React from 'react'
import './detailstask.css'
import '../Head/head.css'
import { Link, Redirect } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 上一页 from '../images/上一页.png'
import chen_xx___u105 from '../images/chen_xx___u105.svg'
import u110 from '../images/u110.svg'
import u118 from '../images/u118.svg'
import 金币 from '../images/金币.png'

class DetailsTask extends React.Component {
  render () {
    let data = this.props.location.query;

    if(!data){
      return <Redirect push to="/HomePage" />;
    }

    return (
      <div className="detailstask">
        <div className="head">
          <Link to='/HomePage'>
            <img src={上一页} alt=""/>
          </Link>
          <span>任务详情</span>
        </div>
        <div className="main first">
          <div className="top">
            <img src={data.head} alt=""/>
            <p><span>{data.name}</span> <img src={u110} alt=""/></p>
          </div>
        </div>
        <div className="main">
          <p>{data.content}</p>
          <div className="cont">
            <img src={u118} alt=""/>
            <p>{data.address}</p>
            <img className='jb' src={金币} alt=""/>
            <span>50</span>
          </div>
        </div>
        <div className="main1">
          <Link to='/Accept'>
            接受任务
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default DetailsTask;
