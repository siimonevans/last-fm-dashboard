import React, { Component } from 'react'
import './Grid.css'
import UserInfo from '../../components/UserInfo/UserInfo'
import Scrobbles from '../../components/Scrobbles/Scrobbles'
import TopTracks from '../../components/TopTracks/TopTracks'
import TopArtists from '../../components/TopArtists/TopArtists'
import RecentTracks from '../../components/RecentTracks/RecentTracks'
import MostPlayed from '../../components/MostPlayed/MostPlayed'
import NowPlaying from '../../components/NowPlaying/NowPlaying'

class Grid extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="grid">
          <li><UserInfo /></li>
          <li><NowPlaying /></li>
          <li><MostPlayed /></li>
          <li><Scrobbles /></li>
          <li><TopArtists /></li>
          <li><TopTracks /></li>
          <li><RecentTracks /></li>
        </ul>
      </div>
    )
  }
}

export default Grid