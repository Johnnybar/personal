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
                <h1 style={{textAlign:'left', color:'grey', marginLeft:'5px'}}>My Work So Far</h1>
                <div className = "wrapper" >
                        <img className="box a" src='./imagebunker.png'/>
                    <div className='box-text imagebunker'>An Instagram-like website where users can upload their images and comment on other users' images. Click <a href='https://imagebunker.herokuapp.com/#/home' target="_blank">here</a> to check website out or <a href='https://github.com/Johnnybar/imageboard' target="_blank">here</a> to see source code</div>
                        <img className="mid-box b" src='./trackshare2.png'/>
                    <div className='box-text trackshare'>a Social Network where users can register/login, befriend other users, see who's online and exchange song suggestions on the community chat. Click <a href='http://track-share.herokuapp.com/welcome/#/' target="_blank">here</a> to check website out or <a href='https://github.com/Johnnybar/social-network' target="_blank">here</a> to see source code</div>
                        <img className="big-box c" src='./dubbing.png'/>
                    <div className='box-text dubbing'>English Showtimes In Berlin, a website that allows users to check out cinemas screening non-dubbed movies in Berlin, view the most current movie program using the Cinepass API, save their favourite cinemas and search for movie info using the IMDB DB. Click <a href='http://english-showtimes-berlin.herokuapp.com' target="_blank">here</a> to check website out or <a href='https://github.com/Johnnybar/english-showtimes-berlin' target="_blank">here</a> to see source code</div>
                    <img className="box e" src='./petition.png'/>
                    <div className='box-text petition'>An online petition that allows users to register, manage their profile, sign a petition and see who else signed. Click <a href='https://j-petition.herokuapp.com/register'>here</a> to check website out or <a href='https://github.com/Johnnybar/petition'>here</a> to see source code</div>
                        <img className="box g" src='./mini.png'/>
                        <div className='down-arrow'>▼</div>
                        <img className="big-box d" src='./spotifyui.png'/>
                    <div className='box-text spotifyui'>A mini-Spotify UI to search for and play music from albums and artists. Click <a href='https://github.com/Johnnybar/mini-projects/tree/master/spotifyApiSearch' target="_blank">here</a> to see source code</div>
                        <img className="big-box f" src='./gitsearch.png'/>
                    <div className='box-text gitsearch'>A mini-app, designed to search for GitHub users and view their most recent commits. Click <a href='https://github.com/Johnnybar/mini-projects/tree/master/GithubApiSearch' target="_blank">here</a> to see source code</div>

                </div>
            </div>
        )
    }
}
