import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import address from '../images/664.png'
import search from '../images/f.png'
import kaka from '../images/u75.svg'

class Header extends React.Component {
  render () {
    return (
      <header>
        <span>武汉</span>
        <img className='address' src={address} alt=""/>
        <img className='kaka' src={kaka} alt=""/>
        <Link to='/Search'>
          <img className='search' src={search} alt=""/>
        </Link>
      </header>
    )
  }
}

export default Header;
