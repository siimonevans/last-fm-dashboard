import React, { Component } from 'react'
import './UserInfo.css'

class UserInfo extends Component {

  getUserInfo() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'TheSimonEvans',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getInfo&user='+ userName +'&api_key='+ key +'&format=json')
      .then( response => response.json() )
      .then(function(data) {

        let user = data.user

        const avatarContainer = document.querySelector('.user-info__avatar')
        const realnameContainer = document.querySelector('.user-info__realname')
        const usernameContainer = document.querySelector('.user-info__username span')
        const countryContainer = document.querySelector('.user-info__country span')

        avatarContainer.innerHTML += '<img src="' + user.image[3]["#text"] + '">'
        realnameContainer.innerHTML += user.realname
        usernameContainer.innerHTML += user.name
        countryContainer.innerHTML += user.country
    })
  }

  componentDidMount() {
    this.getUserInfo()
  }

  render() {
    return (
      <div className="user-info">
        <div className="user-info__avatar"></div>
        <h1 className="user-info__realname"></h1>
        <div className="user-info__username">username: <span></span></div>
        <div className="user-info__country">location: <span></span></div>
      </div>
    )
  }
}

export default UserInfo