import React from 'react';

export default class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  render() {
    return (<div id='work-section'>
      <div className='work-top'>
        <div className='work-title'>
          <h1 >My Previous Work</h1>
        </div>
        <div className='work-description'>
          <p>
            <a href='https://spot-stats.herokuapp.com/' target="_blank">
              Spot.Stats</a>, Interactive Spotify search tool, allowing users to get listening statistics using diagrams and search through playlists.&nbsp;
            <a href='http://track-share.herokuapp.com/welcome/#/' target="_blank">
            Track#Share</a>, Social Network where users can register/login, befriend other users, see who's online and exchange song suggestions on the community chat.&nbsp;
            <a href='https://j-petition.herokuapp.com/register'>
              Save The Drop Bear</a>, an online petition allowing users to register, manage a profile, sign a petition and see signers.&nbsp;
            <a href='http://english-showtimes-berlin.herokuapp.com' target="_blank">
              English Showtimes Berlin</a>, a website that allows users to view cinemas that play non-dubbed movies in Berlin, check the current program using an API, save favourite cinemas and search for movie info using the IMDB DB.&nbsp;
            <a href='https://github.com/Johnnybar/issue_search' target="_blank">
              issueSearch</a>, A single page React application, allowing users to search for issues on GitHub, based on Repo or Username.&nbsp;

                <a href='https://imagebunker.herokuapp.com/#/home' target="_blank">Image Bunker</a>
                , An Instagram-like website where users can upload images and comment on other users' images.&nbsp;
            <a href='https://github.com/Johnnybar/mini-projects/tree/master/spotifyApiSearch' target="_blank">
              SpotifyUi</a>, a mini-UI using jQuery to search and play music.&nbsp;
            <a href='https://github.com/Johnnybar/mini-projects/tree/master/GithubApiSearch' target="_blank"><br/>
              GitSearch.</a>, a mini-app, using jQuery to search for GitHub users and view their most recent commits.&nbsp;
            <br/>
            <span className='highlight'>&nbsp;View source code for all projects
              <a href='https://github.com/Johnnybar' target="_blank">&nbsp;here. &nbsp;</a>
            </span>
          </p>
        </div>
      </div>
      <div className="wrapper">
        <a className='box a' href='https://imagebunker.herokuapp.com/#/home' target="_blank">
          <img className="box a" src='./imagebunker.png'/></a>
        <a className='box i' href='http://track-share.herokuapp.com/welcome/#/' target="_blank">
          <img className="box i" src='./trackshare2.png'/></a>
        <a className="box c" href='http://english-showtimes-berlin.herokuapp.com' target="_blank">
          <img className="box c" src='./dubbing.png'/></a>
        <a className="box e" href='https://j-petition.herokuapp.com/register' target="_blank">
          <img className="box e" src='./petition.png'/></a>
        <a className="box h" href='https://github.com/Johnnybar/issue_search' target="_blank">
          <img className="box h" src='./issueSearch.png'/></a>
        <a className="box b" href='https://spot-stats.herokuapp.com/' target="_blank">
          <img className="box b" src='./spotStats.png'/></a>
        <img className="box g" src='./mini.png'/>
        <a className="box d" href='https://github.com/Johnnybar/mini-projects/tree/master/spotifyApiSearch' target="_blank">
          <img className="box d" src='./spotifyui.png'/></a>
        <a className="box f" href='https://github.com/Johnnybar/mini-projects/tree/master/GithubApiSearch' target="_blank">
          <img className="box f" src='./gitsearch.png'/></a>
      </div>
    </div>)
  }
}
