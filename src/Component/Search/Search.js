import React from 'react'
import './search.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import 资源21 from '../images/资源21.png'
import 资源22 from '../images/资源22.png'

class Search extends React.Component {
  render () {
    return (
      <div className="search">
        <header>
          <div className="inp">
            <input type="text" placeholder='请输入关键字' />
            <img src={资源21} alt=""/>
          </div>
          <Link to='/HomePage'>
            <span>取消</span>
          </Link>
        </header>
        <div className="main">
          <img src={资源22} alt=""/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Search;
