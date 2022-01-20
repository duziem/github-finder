import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import * as axios from 'axios';
import Users from './components/Users';
import Search from './components/Search';

class App extends Component{
  constructor(){
    super();
    this.state={
      users: [],
      loading: false
    }
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
  //     users: users.data.items,
  //     loading: false
  //   })
  // }

  //Search the Github users api
  searchUsers= async (text)=>{
    this.setState({
      loading: true
    })

    const users = await axios({
      method: 'get',
      url: `https://api.github.com/users?q=${text}`,
    });
      
    this.setState({
      users: users.data,
      loading: false
    })
  }

  //clear users list
  clearUsers= ()=> this.setState({ users: users.data});

  render(){
    // console.log(this.state.users)

    return (
      <div className="App">
        <Navbar/>
        <div className= "container">
          <Search searchUsers= {this.searchUsers} clearUsers= {this.clearUsers} isClear= {this.state.users.length? true : false} />
          <Users loading= {this.state.loading} users= {this.state.users}/> 
        </div>
      </div>
  
    );
  }
}

export default App;
