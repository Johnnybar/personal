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
                    <p>{eachLink.title}</p>
                    <p>{eachLink.description}</p>
                    <a href={eachLink.link}>{eachLink.link}</a>
                    {/* <p>HELLLO</p> */}
                </div>
            )
        }
        if(posts){
            // console.log('hello');
            postsList = posts.map(eachPost=>
                // console.log(eachLink);
                <div className='each-post'>
                    <p>{eachPost.title}</p>
                    <p>{eachPost.description}</p>
                </div>
            )

        }
        return(
            <div id='about-section'>
                <div className='about-top'>
                <div className='about-me'><h1>This is about me</h1></div>
                <div className='skills'><h1>Description of what I do</h1></div>
                <div className='spotify-container'>
                <iframe src="https://open.spotify.com/embed/user/jonathanbar/playlist/4bzbcW0ZuzRrtut93MSRz1" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
                </div>
                </div>
                <div className='about-bottom'>
                <div className='all-links'>
                    {linksList}
                </div>
                <div className='all-posts'>
                    {postsList}
                </div>
            </div>



            </div>
        )
    }
}
export default connect(mapStateToProps)(About)
