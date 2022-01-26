import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
// import Users from './components/Users';
// import Search from './components/Search';
import Alert from './components/Alert';
import UserItem from './components/UserItem';
import Home from './components/Home';


class App extends Component{
    state={
      users: [],
      user: {},
      repos: [],
      loading: false,
      alert: null
    }

  // async componentDidMount(){
  //   this.setState({
  //     loading: true
  //   })

  //   const users = await axios({
  //     method: 'get',
  //     url: 'https://api.github.com/users'
  //   });
      
  //   this.setState({
  //     users: users.data,
  //     loading: false
  //   })
  // }

  searchUsers= async (text)=>{
    this.setState({
      loading: true
    })

    const users = await axios({
      method: 'get',
      url: `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    });
    
    if(users.data.items){
      this.setState({
        users: users.data.items,
        loading: false
      })
    }else{
      console.log('res did not return data');
      this.setState({loading: false})
    }
    
  }

  //clear users list
  clearUsers= ()=>{
    this.setState({users:[]})
  }

  setAlert= (msg, type)=>{
    this.setState({alert: {msg, type}})
  }
  clearAlert= ()=>{
    this.setState({alert: null})
  }

  // Get single Github user
  getUser= async (username)=>{
    this.setState({
      loading: true
    })

    const user = await axios({
      method: 'get',
      url: `https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    });
    
    if(user.data){
      this.setState({
        user: user.data,
        loading: false
      })
    }else{
      console.log('res did not return data');
      this.setState({loading: false})
    }
  }

  //Get Github user repos
  getUserRepos= async (username)=>{
    this.setState({
      loading: true
    })

    const repos = await axios({
      method: 'get',
      url: `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    });
    
    if(repos.data){
      this.setState({repos: repos.data, loading: false})
    }else{
      console.log('res did not return data');
      this.setState({loading: false})
    }
  }

  render(){
    // console.log(this.state.users)

    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className= "container">
            <Alert alert= {this.state.alert} clearAlert= {this.clearAlert} />
            <Switch>
              {/* <Route exact path= '/' render={props=>(
                <div>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} isClear= {this.state.users.length ? true : false} setAlert= {this.setAlert} />
                <Users loading= {this.state.loading} users= {this.state.users}/>
              </div>
              )} /> */}
              <Route exact path= '/' render= {props=> (
                <Home {...props} searchUsers={this.searchUsers} clearUsers={this.clearUsers} setAlert= {this.setAlert} loading= {this.state.loading} users= {this.state.users} />
              )} />
              <Route path='/user/:login' render= {props=>(
                <UserItem {...props} getUser= {this.getUser} getUserRepos= {this.getUserRepos} user= {this.state.user} repos= {this.state.repos} loading={this.state.loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
  
    );
  }
}

export default App;
