import React from 'react';
import About from './about';
import Contact from './contact';
import Work from './work'
import scrollIntoView from 'scroll-into-view';




export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={}

    }


    componentDidMount() {

    }
    render(){
        return(
            <div>
                <About />
                <Work/>
                <Contact />
            </div>
        )
    }
}
