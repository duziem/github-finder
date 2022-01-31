import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';


function Search({ setAlert, isClear }){
    const githubContext= useContext(GithubContext);
    const {searchUsers, clearUsers, users}= githubContext;

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

// Search.propTypes = {
//     isClear: PropTypes.bool.isRequired,
//     clearUsers: PropTypes.func.isRequired,
//     setAlert: PropTypes.func.isRequired,
//     searchUsers: PropTypes.func.isRequired
// }

export default Search
