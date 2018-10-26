import React, { Component } from 'react'
import AOS from 'aos';
import portfolioShowImg from '../../../assets/images/PortfolioShow.png'
import checkmarkIMG from '../../../assets/images/Checkmark.png'
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
                    <div className="row works-row">
                        <div className="col-sm-12 col-md-7 project-description">
                                <h3>Humber College Web Design & Interactive Media <br/>Portfolio Show 2018</h3>
                                <p>
                                {"  "}The Humber College Web Design & Interactive Media Portfolio Show class of 2018 is a portfolio showcase,
                                featuring all of the talent and passion they are ready to bring with them into the workforce!
                                It was a great night of food and networking, and meetings of the talented individuals who were about to move 
                                from students to professionals. Guests experienced great projects that explore augmented reality, wearable tech, 
                                UX/UI, app and web development, Arduino, and more.
                                </p>
                                <a href="http://humberinteractive.com/2018/webd/" className="btn">Check it out!</a>
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <div data-aos="zoom-in" className="screenshots">
                                <img src={portfolioShowImg} width="100%" height="auto" alt="portfolio-show"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <div data-aos="zoom-in" className="screenshots">
                                    <img src={checkmarkIMG} width="100%" height="auto" alt="portfolio-show"/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-7 project-description">
                                <h3>Checkmark</h3>
                            </div>
                    </div>
                </div>
          </div>
      </React.Fragment>
    )
  }
}


export default Works
