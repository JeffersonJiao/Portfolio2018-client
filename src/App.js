import React, { Component } from 'react'
import {About} from './components/pages/About'
import './App.css'
import {Header} from './components/pages/Header'
import {Works} from  './components/pages/Works'
import {Contact} from './components/pages/Contact'
 
class App extends Component {

  render() {
    return (
      <React.Fragment>
          <Header/>
          <About/>
          <Works/>
          <Contact/>
      </React.Fragment>
    );
  }
}

export default App;
