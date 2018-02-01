import React from 'react';
import axios from './axios'
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount() {


    }
    render() {

        return (
            <div>This is App</div>
        )
    }
}
