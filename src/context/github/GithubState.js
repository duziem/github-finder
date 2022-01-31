import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';


function GithubState(props) {

    const initialState= {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch]= useReducer(GithubReducer, initialState)

    //Search Users
    const searchUsers= async (text)=>{
        setLoading();
    
        const users = await axios({
          method: 'get',
          url: `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
        });
        
        if(users.data.items){
          dispatch({type:SEARCH_USERS, payload: users.data.items});
        }else{
          console.log('res did not return data');
          clearLoading();
        }
        
    }

    //GetUser
    const getUser= async (username)=>{
      setLoading();
  
      const user = await axios({
        method: 'get',
        url: `https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      });
      
      if(user.data){
        dispatch({type:GET_USER, payload: user.data});
      }else{
        console.log('res did not return data');
        clearLoading();
      }
    }

    //Get Repos
    const getUserRepos= async (username)=>{
      setLoading();
  
      const repos = await axios({
        method: 'get',
        url: `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      });
      
      if(repos.data){
        dispatch({type:GET_REPOS, payload: repos.data});
      }else{
        console.log('res did not return data');
        clearLoading();
      }
    }

    //Clear Users
    const clearUsers= ()=>{
        dispatch({ type:CLEAR_USERS });
    }

    //Set Loading
    const setLoading= ()=> dispatch({type: SET_LOADING});
    //clear loading
    const clearLoading= ()=> dispatch({type: CLEAR_LOADING});

    return (<GithubContext.Provider value={{
       users: state.users,
       user: state.user,
       repos: state.repos,
       loading: state.loading,
       searchUsers,
       clearUsers,
       getUser,
       getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>);
}

export default GithubState;
