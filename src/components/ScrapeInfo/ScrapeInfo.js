import React, { Component } from 'react'
import './ScrapeInfo.css'

class ScrapeInfo extends Component {

  scrapeInfo() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'TheSimonEvans',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';
    
    function getRecent() {
      fetch(apiLink +'?method=user.getrecenttracks&user='+ userName +'&api_key='+ key +'&format=json')
        .then( response => response.json() )
        .then(function(data) {
          let tracks = data.recenttracks.track

          return tracks.map(function(track) {
            console.log(track.name)
          })
      })
    }

    function getUserInfo() {
      fetch(apiLink +'?method=user.getInfo&user='+ userName +'&api_key='+ key +'&format=json')
        .then( response => response.json() )
        .then(function(data) {
          let user = data.user
          
          console.log('Username: ' + user.name)
          console.log('Real name: ' + user.realname)
          console.log('Location: ' + user.country)
          console.log('Scrobbles: ' + user.playcount)
          console.log('Avatar: ' + user.image[3]["#text"])
          console.log('URL: ' + user.url)
      })
    }

    function getTopTracks() {
      fetch(apiLink +'?method=user.getTopTracks&user='+ userName +'&api_key='+ key +'&format=json')
        .then( response => response.json() )
        .then(function(data) {

          let topTracks = data.toptracks.track

          return topTracks.map(function(track) {
            let name   = track.name;
            let artist = track.artist.name;
            let playcount = track.playcount;
            let trackUrl = track.url;
            let image = track.image[1]["#text"];

            const trackHTML = document.querySelector( 'main ul' )
            trackHTML.innerHTML += '<li class="track"><div><img src="' + image + '"></div><div>' + name + '</div><div>' + artist + '</div><div>' + playcount + '</div><div><a href="' + trackUrl + '">More info</a></div></li>'

          })

      })
    }

    function run() {
      getRecent()
      getUserInfo()
      getTopTracks()
    }

    run()
  }

  componentDidMount() {
    this.scrapeInfo()
  }

  render() {

    return (
      <div className="wrapper">
        <main>
          <ul></ul>
        </main>
      </div>
    )
  }
}

export default ScrapeInfo