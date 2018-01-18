import React from 'react'
import './head.css'

class Head extends React.Component {
  render () {
    return (
      <div className="head">
        <div className="head">
          <Link to='/Personal'>
            <img src={上一页} alt=""/>
          </Link>
          <span>已完成任务</span>
        </div>
      </div>
    )
  }
}

export default Head;
