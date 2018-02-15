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
        console.log('before dispatch');
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

                <div className='each-link'>
                    <h5>{eachLink.title}</h5>
                    <h5>{eachLink.description}</h5>
                    <a href={'//'+eachLink.link} target="_blank"><h5>{eachLink.link}</h5></a>
                    {/* <p>HELLLO</p> */}
                </div>
            )
        }
        if(posts){
            // console.log('hello');
            postsList = posts.map(eachPost=>
                // console.log(eachLink);
                <div className='each-post'>
                    <h5>{eachPost.title}</h5>
                    <h5>{eachPost.description}</h5>
                </div>
            )

        }
        return(
            <div id='about-section'>
                <div className='about-top'>
                <div className='about-me'><h1>This is about me</h1>
                <h4>I’m a language expert turned JavaScript developer. I've gotten good at learning and spend most of my life trying to find time to make music.</h4>
                <h4>I am currently looking to develop and use my skill set as a developer, and have a natural inclination towards design, content and music.</h4>
            </div>
                <div className='skills'><h1>Description of what I do</h1>
                <h4>JavaScript | ReactJs | Redux | Node.js | HTML (5/6) & CSS(3) | PostgreSQL | RESTful APIs | AngularJs | jQuery | Express.js | Handlebars.js | Socket.io </h4>
                <h4>Adobe Photoshop | Adobe Illustrator</h4>

            </div>
                <div className='spotify-container'>
                <iframe src="https://open.spotify.com/embed/user/jonathanbar/playlist/4bzbcW0ZuzRrtut93MSRz1" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
                </div>
                </div>
                <div className='about-bottom'>

                <div className='all-links'>
                    <h4>My Current favourite links</h4>
                    {linksList}
                </div>
                <div className='all-posts'>
                    <h4>Blog posts and whatever's <br/>not directly JS-related</h4>
                    {postsList}
                </div>
            </div>



            </div>
        )
    }
}
export default connect(mapStateToProps)(About)
