import React from 'react'
import './find.css'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'antd';
import Header1 from '../Header1/Header1'
import Footer from '../Footer/Footer'
import u284 from '../images/u284.svg'
import u343 from '../images/u343.svg'
import u359 from '../images/u359.svg'
import u277 from '../images/u277.svg'
import u310 from '../images/u310.png'
import u286 from '../images/u286.svg'
import u288 from '../images/u288.svg'
import u290 from '../images/u288.svg'
import u118 from '../images/u118.svg'
import u298 from '../images/u298.svg'
import u302 from '../images/u302.svg'
import info from '../images/info.png'
import u363 from '../images/u363.jpg'
import 资源1 from '../images/资源1.png'
import 资源2 from '../images/资源2.png'
import 资源3 from '../images/资源3.png'
import 资源4 from '../images/资源4.png'
import 资源5 from '../images/资源5.png'
import 微信 from '../images/微信.png'
import QQ1df from '../images/QQ1df.png'
import 微博 from '../images/微博.png'

class Find extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {

    this.setState({
      visible: false,
    });
  }
  render () {
    return (
      <div className="find">
        <Header1 />
        <div className="content">
          <img className='head11' src={u284} alt=""/>
          <span className='name'>
            泡沫
            <img src={u277} alt=""/>
          </span>
          <Button type="primary" onClick={this.showModal}></Button>
          <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          >
            <div className="list">
              <img src={资源1} alt=""/>
              <p>
                <span>分享到</span>
                <img src={微信} alt=""/>
                <img src={QQ1df} alt=""/>
                <img src={微博} alt=""/>
              </p>
            </div>
            <div className="list">
              <img src={资源2} alt=""/>
              <p>收藏</p>
            </div>
            <div className="list">
              <img src={资源3} alt=""/>
              <p>隐藏此动态</p>
            </div>
            <div className="list">
              <img src={资源4} alt=""/>
              <p>不看他的动态</p>
            </div>
            <div className="list">
              <img src={资源5} alt=""/>
              <p>举报</p>
            </div>
          </Modal>
          <p>安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... </p>
          <img className='xq' src={u286} alt=""/>
          <img className='xq' src={u288} alt=""/>
          <img className='xq' src={u290} alt=""/>
          <div className="js">
            <span>58 分钟前</span>
            <img className='addr' src={u118} alt=""/>
            <span>宏村秀里精品文化酒店</span>
            <img src={u298} alt=""/>326
            <img src={u302} alt=""/>70
            <img src={info} alt=""/>26
          </div>
        </div>
        <div className="content">
          <img className='head11' src={u343} alt=""/>
          <span className='name'>
            初夏
            <img src={u277} alt=""/>
          </span>
          <Button type="primary" onClick={this.showModal}></Button>
          <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          >
            <div className="list">
              <img src={资源1} alt=""/>
              <p>
                <span>分享到</span>
                <img src={微信} alt=""/>
                <img src={QQ1df} alt=""/>
                <img src={微博} alt=""/>
              </p>
            </div>
            <div className="list">
              <img src={资源2} alt=""/>
              <p>收藏</p>
            </div>
            <div className="list">
              <img src={资源3} alt=""/>
              <p>隐藏此动态</p>
            </div>
            <div className="list">
              <img src={资源4} alt=""/>
              <p>不看他的动态</p>
            </div>
            <div className="list">
              <img src={资源5} alt=""/>
              <p>举报</p>
            </div>
          </Modal>
          <p>在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...</p>
          <img className='xq' src={u286} alt=""/>
          <img className='xq' src={u288} alt=""/>
          <img className='xq' src={u290} alt=""/>
          <div className="js">
            <span>1 小时前</span>
            <img className='addr' src={u118} alt=""/>
            <span>浙江省桐乡市乌镇酒吧</span>
            <img src={u298} alt=""/>371
            <img src={u302} alt=""/>128
            <img src={info} alt=""/>75
          </div>
        </div>
        <div className="content">
          <img className='head11' src={u359} alt=""/>
          <span className='name'>
            陈xx
            <img src={u277} alt=""/>
          </span>
          <Button type="primary" onClick={this.showModal}></Button>
          <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          >
            <div className="list">
              <img src={资源1} alt=""/>
              <p>
                <span>分享到</span>
                <img src={微信} alt=""/>
                <img src={QQ1df} alt=""/>
                <img src={微博} alt=""/>
              </p>
            </div>
            <div className="list">
              <img src={资源2} alt=""/>
              <p>收藏</p>
            </div>
            <div className="list">
              <img src={资源3} alt=""/>
              <p>隐藏此动态</p>
            </div>
            <div className="list">
              <img src={资源4} alt=""/>
              <p>不看他的动态</p>
            </div>
            <div className="list">
              <img src={资源5} alt=""/>
              <p>举报</p>
            </div>
          </Modal>
          <img className='u363' src={u363} alt=""/>
          <div className="js">
            <span>1 小时前</span>
            <img className='addr' src={u118} alt=""/>
            <span>浙江省桐乡市乌镇酒吧</span>
            <img src={u298} alt=""/>371
            <img src={u302} alt=""/>128
            <img src={info} alt=""/>75
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Find;
