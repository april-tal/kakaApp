import React from 'react'
import './homemain.css'
import { Link } from 'react-router-dom'
import fj from '../images/u617.svg'
import head from '../images/chen_xx___u105.svg'
import male from '../images/u110.svg'
import head1 from '../images/u631.svg'
import female from '../images/u277.svg'
import addr from '../images/u118.svg'

class HomeMain extends React.Component {
  state = {
    details:[
      {
        id:1,
        head: head,
        name:'chen xx',
        content:'想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况.....',
        address:'上海市浦东新区 988 km 2017-03-09',
        sex:male,
        money:'50'
      },
      {
        id:2,
        head: head1,
        name:'an 然',
        content:'我想知道这个星巴克现在的客流量怎么样。。。',
        address:'合肥市包河区 917 km 2017-03-09',
        sex:male,
        money:'50'
      }
    ]
  }

  render () {
    const details = this.state.details
    return (
      <div className="homemain">
        {details.map((item,index) => (
          <div className="task">
            <Link to={{pathname: `/DetailsTask`, query: item}} >
              {item.content}
            </Link>
            <div className="information">
              <img className='head11' src={item.head} alt=""/>
              <span>{item.name}</span>
              <img className='male' src={item.sex} alt=""/>
              <span className='gold'>50</span>
              <span>
                <img src={addr} alt=""/>
                <span>{item.address}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default HomeMain;
