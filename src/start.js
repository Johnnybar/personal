import { Router, Route, IndexRoute, hashHistory, browserHistory, Redirect } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducer from './reducers';
import App from './app';
import Main from './main';
import { BrowserRouter } from 'react-router-dom'

let router;

const mainRouter = (
<Provider store = {store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/contact" component ={Main} />
            <Route path="/about" component ={Main}  />
            <Route path="/home" component ={Main}  />
            <IndexRoute component={Main} />
            <Redirect from ="*" to="/" />
        </Route>
    </Router>
</Provider>
);


ReactDOM.render(
    mainRouter,
    document.querySelector('main')
);
