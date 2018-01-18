import React from 'react'
import Hammer from 'react-hammerjs'
import Get from '../Get/Get'
import './hammercp.css'
import img1 from '../images/1.png'
import img2 from '../images/11.png'
import img3 from '../images/111.png'

class HammerCp extends React.Component {
  state = {
    marginLeft:0
  }
  handleLeft = () => {
    if(this.state.marginLeft < 3){
      this.setState({
        marginLeft:this.state.marginLeft + 1
      })
    }
    console.log(this.state.marginLeft);
  }
  render () {
    let ml = `${this.state.marginLeft * -100}vw`
    return (
      <Hammer onSwipeLeft={ this.handleLeft }>
        <div className="show">
          <div className='guide' style={{marginLeft:ml}}>
            <img src={ img1 } alt=""/>
            <img src={ img2 } alt=""/>
            <img src={ img3 } alt=""/>
            <Get />
          </div>
        </div>
      </Hammer>
    )
  }
}

export default HammerCp;
