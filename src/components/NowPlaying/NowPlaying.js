import React, { Component } from 'react'
import './NowPlaying.css'

class NowPlaying extends Component {

  getNowPlaying() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'LAST.HQ',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getRecentTracks&user='+ userName +'&api_key='+ key +'&format=json&limit=1')
        .then( response => response.json() )
        .then(function(data) {

          let nowPlaying = data.recenttracks.track[0]
          let name   = nowPlaying.name;
          let artist = nowPlaying.artist['#text'];

          const titleHTML = document.querySelector('.now-playing__title')
          const artistHTML = document.querySelector('.now-playing__artist')

          titleHTML.innerHTML += '"' + name + '"'
          artistHTML.innerHTML += artist

      })
  }

  componentDidMount() {
    this.getNowPlaying()
  }

  render() {
    return (
      <div className="now-playing">
        <div className="grid__heading grid__heading--white">Now Playing</div>
        <div className="now-playing__inner">
          <div className="now-playing__title"></div>
          <div className="now-playing__artist"></div>
        </div>
      </div>
    )
  }
}

export default NowPlaying