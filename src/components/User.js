import React, { Component } from 'react'

class User extends Component{
    // const {id, avatar_url, login, html_url}= this.props.user;
    state={
        id: this.props.user.id,
        avatar_url: this.props.user.avatar_url,
        login: this.props.user.login,
        html_url: this.props.user.html_url
    }


    render(){
        const {avatar_url, login, html_url}= this.state;

        return (
            <div className='card text-center'>
            <img src={avatar_url} alt="" className='round-img' style={{width: '60px'}}/> 
            <h3>{login}</h3>
            <div>
                <a href={html_url} className= "btn btn-dark btn-small my-1">
                    more
                </a>
            </div>
         </div>
        )

    }
}

export default User
