import React, { Component } from 'react'
import './TopArtists.css'

class TopArtists extends Component {

  getTopArtists() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'TheSimonEvans',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getTopArtists&user='+ userName +'&api_key='+ key +'&format=json&limit=10')
        .then( response => response.json() )
        .then(function(data) {

          let TopArtists = data.topartists.artist

          return TopArtists.map(function(artist) {
            let name   = artist.name;
            let artistUrl = artist.url;

            const artistHTML = document.querySelector('.top-artists')
            artistHTML.innerHTML += '<a href="' + artistUrl +'" class="top-artists__artist"><div>' + name + '</div></a>'
          })
      })
  }

  componentDidMount() {
    this.getTopArtists()
  }

  render() {
    return (
      <div className="top-artists"></div>
    )
  }
}

export default TopArtists