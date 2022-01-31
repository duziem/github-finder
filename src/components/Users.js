import React, { useContext } from 'react'
import User from './User'
import Spinner from './Spinner';
import GithubContext from '../context/github/GithubContext';

function Users() {
    const githubContext= useContext(GithubContext);
    const {users, loading}= githubContext;

    return (
        <div className='grid-3'>
            {
                loading ?
                <Spinner/> :
                users.map(user => <User key= {user.id} user= {user} />)
            }
        </div>
    )
}

export default Users