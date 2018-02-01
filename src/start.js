import { Router, Route, IndexRoute, hashHistory, browserHistory, Redirect } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducer from './reducers';
import App from './app'

let router;

const mainRouter = (
    <Provider store = {store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <Redirect from ="*" to="/" />
        <IndexRoute component={App} />
        {/* IS THIS THE CORRECT ROUTE FOR INDEX?? */}
    </Route>
    </Router>
</Provider>
);


ReactDOM.render(
    mainRouter,
    document.querySelector('main')
);
