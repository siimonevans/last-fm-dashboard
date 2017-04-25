import React, { Component } from 'react'
import './MostPlayed.css'

class MostPlayed extends Component {

  getMostPlayed() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'TheSimonEvans',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getTopTracks&user='+ userName +'&api_key='+ key +'&format=json&limit=1')
        .then( response => response.json() )
        .then(function(data) {

          let topTracks = data.toptracks.track

          return topTracks.map(function(track) {
            let name        = '"' + track.name + '"'
            let playcount   = track.playcount

            const titleHTML = document.querySelector('.most-played__title')
            const playcountHTML = document.querySelector('.most-played__playcount span')

            titleHTML.innerHTML += name
            playcountHTML.innerHTML += playcount

          })
      })
  }

  componentDidMount() {
    this.getMostPlayed()
  }

  render() {
    return (
      <div className="most-played">
        <div className="grid__heading grid__heading--white">Most Played</div>
        <div className="most-played__inner">
          <div className="most-played__playcount"><span></span></div>
          <div className="most-played__title">Scrobbles of <span></span></div>
        </div>
      </div>
    )
  }
}

export default MostPlayed