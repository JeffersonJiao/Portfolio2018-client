import React, { Component } from 'react'

import './about.css'

export class About extends Component {
  
  render() {
    return (
      <React.Fragment>
          <div id="about" className="about-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h1>About</h1>
                            <div class="about-image">
                                <img src={require('../../../assets/images/lol2.jpg')} width="300px" height="auto" alt="jeff-img"/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
          </div>
      </React.Fragment>
    )
  }
}



export default About