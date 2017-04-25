import React, { Component } from 'react'
import './Scrobbles.css'

class Scrobbles extends Component {

  getScrobbles() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'TheSimonEvans',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getInfo&user='+ userName +'&api_key='+ key +'&format=json')
      .then( response => response.json() )
      .then(function(data) {
        let user = data.user
        const playcountContainer = document.querySelector('.scrobbles__value')
        let playcountFormatted = user.playcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        playcountContainer.innerHTML += playcountFormatted
    })
  }

  componentDidMount() {
    this.getScrobbles()
  }

  render() {
    return (
      <div className="scrobbles">
        <span className="scrobbles__value"></span>
        <span className="scrobbles__label">Scrobbles</span>
      </div>
    )
  }
}

export default Scrobbles