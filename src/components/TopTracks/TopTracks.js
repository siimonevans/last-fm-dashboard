import React, { Component } from 'react'
import './TopTracks.css'

class TopTracks extends Component {

  getTopTracks() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'TheSimonEvans',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getTopTracks&user='+ userName +'&api_key='+ key +'&format=json&limit=10')
        .then( response => response.json() )
        .then(function(data) {

          let topTracks = data.toptracks.track

          return topTracks.map(function(track) {
            let name   = track.name
            let trackUrl = track.url

            const trackHTML = document.querySelector('.top-tracks__inner')
            trackHTML.innerHTML += '<a href="' + trackUrl +'" class="top-tracks__track"><div>' + name + '</div></a>'

          })
      })
  }

  componentDidMount() {
    this.getTopTracks()
  }

  render() {
    return (
      <div className="top-tracks">
        <div className="grid__heading top-tracks__heading">Top Tracks</div>
        <div className="grid__inner top-tracks__inner"></div>
      </div>
    )
  }
}

export default TopTracks