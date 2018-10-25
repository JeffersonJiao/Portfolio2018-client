import React, { Component } from 'react'
import axios from 'axios'

import './contact.css'

export class Contact extends Component {
  state = {
      name: '',
      email: '',
      message: '',
      formErrors: {
          email: '',
          name: '',
          message: ''
      }
  }
  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value,formErrors:{}});
  }
  handleSubmit = e =>{
        e.preventDefault();
        let formErrors = {...this.state.formErrors}
        formErrors.name = (!this.state.name.replace(/\s/g, '').length) ? 'Please enter a valid name.': ''
        formErrors.message = (!this.state.message.replace(/\s/g, '').length) ? 'Please write something on the message text area.': ''
        var validEmail = this.checkEmailValidation(this.state.email) 
        formErrors.email = (validEmail) ?  "" : "Please enter a valid Email."
        this.setState({formErrors},()=>{
            if(this.state.formErrors.message === '' && this.state.formErrors.email === '' && this.state.formErrors.name ==='')
            {
                const {name,email,message} = this.state
                axios.post('/api/contact',{
                    name,
                    email,
                    message
                })
            }  
        })
           
  }
  checkEmailValidation = email =>{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  render() {
    return (
      <React.Fragment>
          <div id="contact" name="contact" className="contact-wrapper">
                <div className="container">
                    <h1>Contact Me</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-8 offset-md-2">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">*Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name here..." name="name" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">*Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleTextarea">*Your Message:</label>
                                <textarea className="form-control" id="message" name="message" rows="3" onChange={this.handleChange}></textarea>
                            </div>
                            
                            <button type="submit" className="btn">Submit</button>
                        </form>
                        <form className="container" >
                            <div className="form-group">
                                <div className="feedback">
                                    
                                       <p>{this.state.formErrors.name}</p>
                                       <p>{this.state.formErrors.email}</p>
                                       <p>{this.state.formErrors.message}</p>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
          </div>
      </React.Fragment>
    )
  }
}



export default Contact
