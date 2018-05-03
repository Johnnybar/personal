import React from 'react';
import axios from './axios';

export const getLinks = function() {
  return axios.get('/get-links').then((results) => {
    return {type: 'GET_LINKS', links: results.data};
  }).catch((err) => {
    console.log(err);
  });

};

export const getPosts = function() {
  return axios.get('/get-posts').then((results) => {
    return {type: 'GET_POSTS', posts: results.data};
  }).catch((err) => {
    console.log(err);
  });

};
