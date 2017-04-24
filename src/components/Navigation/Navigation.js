import React, { Component } from 'react';
import { Link } from 'react-router'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="wrapper">
          <div className="navigation__logo">
            <Link to='/'></Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation