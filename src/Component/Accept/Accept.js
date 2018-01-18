import React from 'react'
import './accept.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import u118 from '../images/u118.svg'

class Accept extends React.Component {
  state = {
    show : false
  }
  handleClick = () => {
    this.setState({
      show:true
    })
  }
  handleCancel = () => {
    this.setState({
      show : false
    })
  }
  render () {
    return (
      <div className="accept">
        <div id="cancelmask" style={{display:this.state.show ? 'block' : 'none'}}>
          <div className="out">
            <p>退出此次编辑</p>
            <span className='cancel' onClick={ this.handleCancel }>取消</span>
            <Link to='/DetailsTask'>
              <span className='LoOut'>退出</span>
            </Link>
          </div>
        </div>
        <div className="head">
          <button onClick={ this.handleClick }>
            取消
          </button>
          <span>回复任务</span>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='请详细描述发布者的问题，以便更圆满的完成此次任务。。。'></textarea>
        <div className="current">
          <p>当前位置</p>
          <div className="right">
            <img src={u118} alt=""/>
            <span>北京市 古北口镇司马台村1层</span>
          </div>
        </div>
        <Link to='/Personal'>
          发送
        </Link>
        <Footer />
      </div>
    )
  }
}

export default Accept;
