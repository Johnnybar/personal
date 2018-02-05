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
import Home from './home';
import { BrowserRouter } from 'react-router-dom'




let router;

const mainRouter = (
<Provider store = {store}>

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/contact" component ={Home} onEnter={function(){
                  document.getElementById("contact-section").scrollIntoView();
                  }
              }/>
            <Route path="/about" component ={Home} onEnter={function(){
                  document.getElementById("about-section").scrollIntoView();
                  }
              } />
            <IndexRoute component={Home} />
            <Redirect from ="*" to="/" />
        </Route>
    </Router>

</Provider>
);


ReactDOM.render(
    mainRouter,
    document.querySelector('main')
);
