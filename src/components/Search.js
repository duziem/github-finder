import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContext';

function Search(){
    const githubContext= useContext(GithubContext);
    const {searchUsers, clearUsers, users}= githubContext;
    const alertContext= useContext(AlertContext);
    const { setAlert }= alertContext;

    const [text, setText]= useState('')

    const handleChange= (e)=>{
        setText(e.target.value)
    }

    //clear the text state
    const clearText= ()=>{
        setText('')
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(text === ''){
            setAlert('Please Enter Something', 'light');
            clearUsers();
        }else{
            searchUsers(text);
            clearText(); // clear the text state which would also clear the search input field
        }
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input name="text" type="text" placeholder='Search Users...' value={text} onChange={handleChange}/>
                <input type="submit" className='btn btn-dark' value='Submit' />
                { users.length > 0 && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
            </form> 
        </div>
    )
}

export default Search
