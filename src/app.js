import React from 'react';
import axios from './axios'
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import scrollIntoView from 'scroll-into-view';
const SpotifyWebApi =require('spotify-web-api-js');
const spotifyApi = new SpotifyWebApi();



export default class App extends React.Component {
    constructor(props) {
        super(props);
       // const params = this.getHashParams();
       // const token = params.access_token;
       // if (token) {
       //   spotifyApi.setAccessToken(token);
       // }
        this.state = {
            // loggedIn: token ? true : false,
            // nowPlaying: { name: 'Not Checked', albumArt: '' },
            // token: token,
        }
        // this.getRecentlyPlayed = this.getRecentlyPlayed.bind(this)
        // this.getHashParams = this.getHashParams.bind(this)

    }

    componentDidMount() {
// console.log('this is state and token: ',this.state, params);

    }

    // Functions for spotifyApi:
    // ---------------------------
    // getHashParams() {
    //   var hashParams = {};
    //   var e, r = /([^&;=]+)=?([^&;]*)/g,
    //       q = window.location.hash.substring(1);
    //   e = r.exec(q)
    //   while (e) {
    //      hashParams[e[1]] = decodeURIComponent(e[2]);
    //      e = r.exec(q);
    //   }
    //   return hashParams;
    // }
    // getRecentlyPlayed(){
    //     spotifyApi.getMyRecentlyPlayedTracks('jonathanbar','H1AdnzqWR3GIAb9GR2R7ZQ')
    //     .then(data=> {
    //         this.setState({name: data.items[0].track.artists[0].name})
    //         console.log('User playlists', data.items,data.items[0].track.artists[0].name);
    //     }, function(err) {
    //         console.error(err);
    //     });
    // }

render() {

    return (<div>
        <div id='nav'>
            {/* <Link to={'/cm'}>CM</Link> */}
            {/* <a href='/cm'>CM</a> */}
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
            <div className='name-title white-font' >
                <div>Johnny_B</div>
                <div>Content And Design Enthusiast</div>
            </div>
            {/* RENDERING SpotifyWebApi ELEMENTS */}
         {/* <div className="App">
            <a href='http://localhost:8080/'>Login to Spotify</a>
            <div>First of recently played: {this.state.name}
            </div>{this.state.loggedIn && <button onClick={() => this.getRecentlyPlayed()}>Check Recently Played</button>}
        </div> */}

        {this.props.children}
    </div>
    </div>)
}
}
