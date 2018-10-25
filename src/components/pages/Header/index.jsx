import React, { Component } from 'react'
import { Nav } from '../Navigation';
import './header.css'
import Particles from 'react-particles-js';

const particleStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%'
}

export class Header extends Component {
  state = {
    particles:{
      number:{
        value: 30,
        density:{
          enable:true,
          value_area:800
        }
      },
      move:{
        enable:true,
        speed: 3,
      }
    }
  }
  
  playParticle = () =>{
    var newSpeed = this.state.particles.move.speed;
    (newSpeed !== 0) ? newSpeed = 0 : newSpeed = 3;

    const particles = {
      number:{
        value: 30,
        density:{
          enable:true,
          value_area:800
        }
      },
      move:{
        enable: true,
        speed: newSpeed
      }
    }
    this.setState({particles})
  }
  render() {
    return (
      <React.Fragment>
          <div className="header-wrapper" onClick={this.playParticle}>
          <Particles
            params={this.state}
            style={particleStyle}
          />
            <div className="container">
              <Nav scrollPos={this.props.scrollPos}/>
              <div className="header-inside row">
                  <div className="col-sm-12">
                    <h1>JEFFERSON JIAO</h1>
                    <p>"All expert developers were once a beginner"</p>
                    <h4>Full Stack Developer</h4>
                  </div>
              </div>
            </div>
            <div className="profile-picture">
            </div>
            <div className="profile-picture-half">

            </div>
          </div>
      </React.Fragment>
    )
  }
}



export default Header
