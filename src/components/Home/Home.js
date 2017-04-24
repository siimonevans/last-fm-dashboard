import React, { Component } from 'react'
import Grid from '../../components/Grid/Grid'
import Navigation from '../../components/Navigation/Navigation'
import './Home.css'

class Home extends Component {
  
  render() {
    return (
      <div>
        <Navigation/>
        <Grid />
      </div>
    )
  }
}

export default Home