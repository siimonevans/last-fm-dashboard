import React, { Component } from 'react';
import { Link } from 'react-router'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Link to='/'>
          Home (navigation link)
        </Link>
      </div>
    )
  }
}

export default Navigation