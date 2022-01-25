import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state= {
        text: ''
    }

    static propTypes = {
        isClear: PropTypes.bool.isRequired,
        clearUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
        searchUsers: PropTypes.func.isRequired
    }

    handleChange= (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    //clear the text state
    clearText= ()=>{
        this.setState({text: ''});
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please Enter Something', 'light')
        }else{
            this.props.searchUsers(this.state.text);
            this.clearText(); // clear the text state which would clear the search input field
        }
    }

    render() {
        const {isClear, clearUsers}= this.props;
        return (
            <div>
               <form className='form' onSubmit={this.handleSubmit}>
                   <input name="text" type="text" placeholder='Search Users...' value={this.state.text} onChange={this.handleChange}/>
                   <input type="submit" className='btn btn-dark' value='Submit' />
                   {isClear && <button className='btn btn-light' onClick={clearUsers}></button>}
                </form> 
            </div>
        )
    }
}

export default Search
