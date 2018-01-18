import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import HomeMain from '../HomeMain/HomeMain'
import Recommend from '../Recommend/Recommend'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner1 from '../images/未标题-1.png'
import Banner2 from '../images/金币.jpg'
import Banner3 from '../images/banner1.jpg'
import './homepage.css'


class HomePage extends React.Component {
  render () {
    return (
      <div className='homepage'>
        <Header />
        <Carousel autoplay>
          <img src={Banner2} alt=""/>
          <img src={Banner1} alt=""/>
          <img src={Banner3} alt=""/>
        </Carousel>
        <div className='OrLine'>
          <div className='line'></div>
          <span className='or'>最新任务</span>
          <div className='line'></div>
        </div>
        <HomeMain />
        <div className='OrLine'>
          <div className='line'></div>
          <span className='or'>今日推荐</span>
          <div className='line'></div>
        </div>
        <Recommend />
        <Footer />
      </div>
    )
  }
}

export default HomePage;
