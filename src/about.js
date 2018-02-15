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

                <ul className='each-link'>
                    <li>{eachLink.title}</li>
                    <li>{eachLink.description}</li>
                    <a href={'//'+eachLink.link} target="_blank"><li>{eachLink.link}</li></a>
                    {/* <p>HELLLO</p> */}
                </ul>
            )
        }
        if(posts){
            // console.log('hello');
            postsList = posts.map(eachPost=>
                // console.log(eachLink);
                <ul className='each-post'>
                    <li>{eachPost.title}</li>
                    <li>{eachPost.description}</li>
                </ul>
            )

        }
        return(
            <div id='about-section'>
                <div className='about-top'>
                <div className='about-me'><h2>About me</h2>
                <h4>I’m a language expert turned JavaScript developer. I've gotten good at learning and spend most of my life trying to find time to make music.</h4>
                <h4>I am currently looking to develop and use my skill set as a developer, and have a natural inclination towards design, content and music.</h4>
            </div>
                <div className='skills'><h2>What I do</h2>
                <h4>JavaScript | ReactJs | Redux | Node.js | HTML (5/6) & CSS(3) | PostgreSQL | RESTful APIs | AngularJs | jQuery | Express.js | Handlebars.js | Socket.io </h4>
                <h4>Adobe Photoshop | Adobe Illustrator</h4>

            </div>
                <div className='spotify-container'>
                <iframe src="https://open.spotify.com/embed/user/jonathanbar/playlist/4bzbcW0ZuzRrtut93MSRz1" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
                </div>
                </div>
                <div className='about-bottom'>

                <div className='all-links'>
                    <h2>My Current favourite links</h2>
                    {linksList}
                </div>
                <div className='all-posts'>
                    <h2>Posts and things <br/>not directly JS-related</h2>
                    {postsList}
                </div>
            </div>



            </div>
        )
    }
}
export default connect(mapStateToProps)(About)
