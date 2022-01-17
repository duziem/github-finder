import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import * as axios from 'axios';
import User from './components/User';
import Users from './components/Users';
import Spinner from './components/Spinner';

class App extends Component{
  constructor(){
    super();
    this.state={
      users: [],
      loading: false
    }
  }

  async componentDidMount(){
    this.setState({
      loading: true
    })

    const users = await axios({
      method: 'get',
      url: 'https://api.github.com/users'
    });
      
    this.setState({
      users: users.data,
      loading: false
    })
  }

  render(){
    console.log(this.state.users)

    return (
      <div className="App">
        <Navbar/>
        <div>
          {this.state.loading ? 
          <Spinner/> : 
          <Users users= {this.state.users}/> 
          }
        </div>
      </div>
  
    );
  }
}

export default App;
