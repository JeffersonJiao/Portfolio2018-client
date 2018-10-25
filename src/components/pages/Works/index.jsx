import React, { Component } from 'react'
import AOS from 'aos';
import './works.css'
AOS.init({
    duration: 1000
  });
export class Works extends Component {
  
  render() {
    return (
      <React.Fragment>
          <div id="works" className="works-wrapper">
                <div className="container">
                    <h1>My Works</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div data-aos="zoom-in">
                                
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7">

                        </div>
                    </div>
                </div>
          </div>
      </React.Fragment>
    )
  }
}


export default Works
