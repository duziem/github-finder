import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import Alert from './components/Alert';
import UserItem from './components/UserItem';
import Home from './components/Home';


function App (){

    const [users, setUsers]= useState([]);
    const [user, setUser]= useState({});
    const [repos, setRepos]= useState([]);
    const [loading, setLoading]= useState(false);
    const [alert, setAlert]= useState(null);

  const searchUsers= async (text)=>{
    // this.setState({
    //   loading: true
    // })
    setLoading(true);

    const users = await axios({
      method: 'get',
      url: `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    });
    
    if(users.data.items){
      // this.setState({
      //   users: users.data.items,
      //   loading: false
      // })
      setUsers(users.data.items);
      setLoading(false);
    }else{
      console.log('res did not return data');
      setLoading(false);
    }
    
  }

  //clear users list
  const clearUsers= ()=>{
    setUsers([]);
  }

  const showAlert= (msg, type)=>{
    setAlert({msg, type})
  }
  const clearAlert= ()=>{
    setAlert(null)
  }

  // Get single Github user
  const getUser= async (username)=>{
    setLoading(true);

    const user = await axios({
      method: 'get',
      url: `https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    });
    
    if(user.data){
      setUser(user.data);
      setLoading(false);
    }else{
      console.log('res did not return data');
      setLoading(false);
    }
  }

  //Get Github user repos
  const getUserRepos= async (username)=>{
    setLoading(true);

    const repos = await axios({
      method: 'get',
      url: `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    });
    
    if(repos.data){
      setRepos(repos.data);
      setLoading(false);
    }else{
      console.log('res did not return data');
      setLoading(false);
    }
  }

    // console.log(this.state.users)

    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className= "container">
            <Alert alert= {alert} clearAlert= {clearAlert} />
            <Switch>
              <Route exact path= '/' render= {props=> (
                <Home {...props} searchUsers={searchUsers} clearUsers={clearUsers} setAlert= {showAlert} loading= {loading} users= {users} />
              )} />
              <Route path='/user/:login' render= {props=>(
                <UserItem {...props} getUser= {getUser} getUserRepos= {getUserRepos} user= {user} repos= {repos} loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
  
    );
}

export default App;
