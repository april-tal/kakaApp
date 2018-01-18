import React from 'react'
import './header1.css'
import kaka from '../images/u75.svg'

class Header1 extends React.Component {
  render () {
    return (
      <div className="header1">
        <img className='kaka' src={kaka} alt=""/>
      </div>
    )
  }
}

export default Header1;
