import React from 'react';




export default class Work extends React.Component{
    constructor(props){
        super(props)
        this.state={}

    }

    componentDidMount() {

    }
    render(){
        return(
            <div id='work-section'>
                <h1 className='white-font' style={{textAlign:'center'}}>My Work So Far</h1>
                <div className = "wrapper" >
                        <a href='https://imagebunker.herokuapp.com/#/home' className='box a' target="_blank"> <img className="box a" src='./imagebunker.png'/></a>
                    <div className='box-text imagebunker'>An Instagram-like website where users can upload their images and comment on other users' images. Click pic to check website out or <a href='https://github.com/Johnnybar/imageboard' target="_blank">here</a> to see source code</div>
                        <a href='http://track-share.herokuapp.com/' className='b' target="_blank"><img className="mid-box" src='./trackshare2.png'/></a>
                    <div className='box-text trackshare'>a Social Network where users can register/login, befriend other users, see who's online and exchange song suggestions on the community chat. Click pic to check website out or <a href='https://github.com/Johnnybar/social-network' target="_blank">here</a> to see source code</div>
                        <a href='http://english-showtimes-berlin.herokuapp.com/' className='c' target="_blank"><img className="big-box " src='./dubbing.png'/></a>
                    <div className='box-text dubbing'>English Showtimes In Berlin, a website that allows users to check out cinemas screening non-dubbed movies in Berlin, view the most current movie program using the Cinepass API, save their favourite cinemas and search for movie info using the IMDB DB. Click pic to check website out or <a href='https://github.com/Johnnybar/english-showtimes-berlin' target="_blank">here</a> to see source code</div>
                        <a href='https://j-petition.herokuapp.com' className='e' target="_blank"><img className="box " src='./petition.png'/></a>
                    <div className='box-text petition'>An online petition that allows users to register, manage their profile, sign a petition and see who else signed. Click pic to check website out or <a href='https://github.com/Johnnybar/petition' target="_blank">here</a> to see source code</div>
                        <img className="box g" src='./mini.png'/>
                        <img className="big-box d" src='./spotifyui.png'/>
                    <div className='box-text spotifyui'>A mini-Spotify UI to search for and play music from albums and artists. Click <a href='https://github.com/Johnnybar/mini-projects/tree/master/spotifyApiSearch' target="_blank">here</a> to see source code</div>
                        <img className="big-box f" src='./gitsearch.png'/>
                    <div className='box-text gitsearch'>A mini-app, designed to search for GitHub users and view their most recent commits. Click <a href='https://github.com/Johnnybar/mini-projects/tree/master/GithubApiSearch' target="_blank">here</a> to see source code</div>

                </div>
            </div>
        )
    }
}
