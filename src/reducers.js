// import React from 'react';

export default function(state = {}, action) {


    if (action.type == 'GET_LINKS') {
        state = Object.assign({}, state, {
            links: action.links
        });
    }

    if (action.type == 'GET_POSTS') {
        state = Object.assign({}, state, {
            posts: action.posts
        });
    }


    return state;
}
