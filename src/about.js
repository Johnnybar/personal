import React from 'react';
import axios from './axios'
import {getLinks} from './actions'
import {getPosts} from './actions'
import { connect } from 'react-redux';


const mapStateToProps = function(state) {
    return {
        links: state.links,
        posts:state.posts

    }
};

class About extends React.Component{
    constructor(props){
        super(props)
        this.state={}

    }

    componentDidMount() {
        // console.log('before dispatch');
        this.props.dispatch(getLinks());
        this.props.dispatch(getPosts());

    }
    render(){
        let linksList;
        let postsList;
        let posts = this.props.posts;
        let links = this.props.links
        if(links){
            // console.log('hello');
            linksList = links.map(eachLink=>
                // console.log(eachLink);

<div><br/>
                    <a className='about-description links-posts-content' href={'//'+eachLink.link} target="_blank"><div className='about-description links-posts-content text-highlight'>{eachLink.title}</div></a>
                    <br/>
                    <div className='about-description links-posts-content'>{eachLink.description}</div>
                    <br/>

                    {/* <p>HELLLO</p> */}
                    </div>

            )
        }
        if(posts){
            // console.log('hello');
            postsList = posts.map(eachPost=>
                // console.log(eachLink);
                <div>
                    <br/>
                    <a className='about-description links-posts-content' href={'//'+eachPost.link} target="_blank"><div className='about-description links-posts-content text-highlight'>{eachPost.title}</div></a>
                    <br/>
                    <div className='about-description links-posts-content'>{eachPost.description}</div>
                </div>
            )

        }
        return(
            <div id='about-section'>
                <div className='about-top'>
                <div className='about-me'><h2 className='about-title'>About me</h2>
                <p className='about-description'>I’m a language expert turned JavaScript developer. I've gotten good at learning and spend most of my life trying to find time to make music.</p>
                <p className='about-description'>I am currently looking to develop and use my skill set as a developer, and have a natural inclination towards design, content and music.</p>
            </div>
                <div className='skills'><h2 className='about-title'>What I do</h2>
                <p className='about-description'>JavaScript, ReactJs, Redux, Node.js, HTML (5/6) & CSS(3), PostgreSQL, RESTful APIs, AngularJs, jQuery, Express.js, Handlebars.js, Socket.io </p>
                <p className='about-description'>Adobe Photoshop, Adobe Illustrator</p>

            </div>
                <div className='spotify-container'>
                <iframe src="https://open.spotify.com/embed/user/jonathanbar/playlist/4bzbcW0ZuzRrtut93MSRz1" width="250" height="300" frameborder="0" allowtransparency="true"></iframe>
                </div>
                </div>
                <div className='about-bottom'>

                <div className='all-links'>
                    <h2 className='links-posts-title'>My Current favourite articles</h2>
                    {linksList}
                </div>
                <div className='all-posts posts-list'>
                    <h2 className='links-posts-title'>favourite Sites At The Moment</h2>
                    {postsList}
                </div>
            </div>



            </div>
        )
    }
}
export default connect(mapStateToProps)(About)
