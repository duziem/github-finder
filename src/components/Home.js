import React, { Component } from 'react';
import Users from './Users';
import Search from './Search';

export class Home extends Component {
    // state= {

    // }


  render() {
    const {searchUsers, clearUsers, setAlert, users, loading}= this.props;

    return (
        <div>
            <Search searchUsers={searchUsers} clearUsers={clearUsers} isClear= {users.length ? true : false} setAlert= {setAlert} />
            <Users loading= {loading} users= {users}/>
        </div>
    )
  }
}

export default Home;
