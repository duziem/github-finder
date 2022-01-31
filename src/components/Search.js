import React, { useState } from 'react'
import PropTypes from 'prop-types'


function Search({searchUsers, setAlert, isClear, clearUsers}){

    const [text, setText]= useState('')

    const handleChange= (e)=>{
        // this.setState({[e.target.name]: e.target.value});
        setText(e.target.value)
    }

    //clear the text state
    const clearText= ()=>{
        // this.setState({text: ''});
        setText('')
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(text === ''){
            setAlert('Please Enter Something', 'light')
        }else{
            searchUsers(text);
            clearText(); // clear the text state which would clear the search input field
        }
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input name="text" type="text" placeholder='Search Users...' value={text} onChange={handleChange}/>
                <input type="submit" className='btn btn-dark' value='Submit' />
                {isClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
            </form> 
        </div>
    )
}

Search.propTypes = {
    isClear: PropTypes.bool.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    searchUsers: PropTypes.func.isRequired
}

export default Search
