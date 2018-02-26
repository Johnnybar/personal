import React from 'react';
import axios from './axios';

export const getLinks = function() {
    // console.log('in actions');
    return axios.get('/get-links').then((results)=>{
        // console.log('this is results.data ', results.data);
        return {
            type:'GET_LINKS',
            links:results.data
        };
    }).catch((err)=>{
        console.log(err);
    });

};

export const getPosts = function() {
    // console.log('in actions');
    return axios.get('/get-posts').then((results)=>{
        // console.log('this is results.data ', results.data);
        return {
            type:'GET_POSTS',
            posts:results.data
        };
    }).catch((err)=>{
        console.log(err);
    });

};
