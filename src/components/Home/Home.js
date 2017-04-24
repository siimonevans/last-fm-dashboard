import React, { Component } from 'react'
import { Link } from 'react-router'
import ScrapeInfo from '../../components/ScrapeInfo/ScrapeInfo'
import Navigation from '../../components/Navigation/Navigation'
import './Home.css'

class Home extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <br />
        <br />
        <Navigation/>
        <div>
          <Link to='/Component1'>Link to Component 1</Link>
        </div>
        <br />
        <br />
        <ScrapeInfo />
      </div>
    )
  }
}

export default Home