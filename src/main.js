import React from 'react';
import About from './about';
import Contact from './contact';
import Work from './work'
import Home from './home'
import scrollIntoView from 'scroll-into-view';
import axios from './axios'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (<div>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </div>)
  }
}
