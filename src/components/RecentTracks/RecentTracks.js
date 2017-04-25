import React, { Component } from 'react'
import './RecentTracks.css'

class RecentTracks extends Component {

  getRecentTracks() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'TheSimonEvans',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getRecentTracks&user='+ userName +'&api_key='+ key +'&format=json&limit=10')
        .then( response => response.json() )
        .then(function(data) {

          let RecentTracks = data.recenttracks.track

          return RecentTracks.map(function(track) {
            let name   = track.name;
            let trackUrl = track.url;

            const trackHTML = document.querySelector('.recent-tracks')
            trackHTML.innerHTML += '<a href="' + trackUrl +'" class="recent-tracks__track"><div>' + name + '</div></a>'

          })
      })
  }

  componentDidMount() {
    this.getRecentTracks()
  }

  render() {
    return (
      <div className="recent-tracks"></div>
    )
  }
}

export default RecentTracks