import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import axios from 'axios';
import Users from './components/Users';
import Search from './components/Search';


class App extends Component{
    state={
      users: [],
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

  clearUsers= ()=>{
    this.setState({users:[]})
  }

  setAlert= (msg, type)=>{
    this.setState({alert: {msg, type}})
  }

  render(){
    console.log(this.state.users)

    return (
      <div className="App">
        <Navbar/>
        <div className= "container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} isClear= {this.state.users.length ? true : false} setAlert= {this.setAlert} />
          <Users loading= {this.state.loading} users= {this.state.users}/> 
        </div>
      </div>
  
    );
  }
}

export default App;
