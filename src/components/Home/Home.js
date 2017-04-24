import React, { Component } from 'react'
import { Link } from 'react-router'
import Component2 from '../../components/Component2/Component2'
import Navigation from '../../components/Navigation/Navigation'
import './Home.css'

class Home extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <h1>Last.fm Dashboard</h1>
        <Navigation/>
        <div>
          <Link to='/Component1'>Link to Component 1</Link>
        </div>
        <Component2 />
      </div>
    )
  }
}

export default Home