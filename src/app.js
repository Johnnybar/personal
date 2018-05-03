import React from 'react';
import axios from './axios'
import {Link} from 'react-router';
import {browserHistory} from 'react-router'
import scrollIntoView from 'scroll-into-view';
const SpotifyWebApi = require('spotify-web-api-js');
const spotifyApi = new SpotifyWebApi();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {}

  render() {

    return (<div>

      <div id='nav'>

        <button type='button' onClick={(e) => {
            scrollIntoView(document.getElementById("home-section"))
          }}>Home</button>
        <button type='button' onClick={(e) => {
            scrollIntoView(document.getElementById("about-section"))
          }}>About</button>
        <button type='button' onClick={(e) => {
            scrollIntoView(document.getElementById("work-section"))
          }}>Work</button>
        <button type='button' onClick={(e) => {
            scrollIntoView(document.getElementById("contact-section"))
          }}>Contact</button>

      </div>

      <div id='home-section'>
        <div className='name-title white-font'>
          <h2 className='name'>Jonathan Bareket</h2>
          <div className='claim'>Full Stack Web Developer</div>
        </div>

        {this.props.children}
      </div>
    </div>)
  }
}
