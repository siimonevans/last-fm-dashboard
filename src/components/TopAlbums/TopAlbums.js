import React, { Component } from 'react'
import './TopAlbums.css'

class TopAlbums extends Component {

  getTopAlbums() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'TheSimonEvans',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getTopAlbums&user='+ userName +'&api_key='+ key +'&format=json&limit=10')
        .then( response => response.json() )
        .then(function(data) {

          let TopAlbums = data.topalbums.album

          console.log(TopAlbums)

          return TopAlbums.map(function(album) {
            let name   = album.name;
            let albumUrl = album.url;

            const albumHTML = document.querySelector('.top-albums')
            albumHTML.innerHTML += '<a href="' + albumUrl +'" class="top-albums__album"><div>' + name + '</div></a>'
          })
      })
  }

  componentDidMount() {
    this.getTopAlbums()
  }

  render() {
    return (
      <div className="top-albums"></div>
    )
  }
}

export default TopAlbums