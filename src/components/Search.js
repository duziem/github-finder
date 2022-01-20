import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state= {
        text: ''
    }

    static propTypes = {

    }

    handleChange= (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearTextState= ()=>{
        this.setState({
            text: ""
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        clearTextState();
        //clearUsers();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='form'>
                <input name= "text" type="text" value={this.state.text} onChange= {this.handleChange} placeholder='Search Users...' />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
                {this.props.isClear && <button className="btn btn-light btn-block" onClick= {this.props.clearUsers}>Clear</button>}
                </form>
            </div>
        )
    }
}

export default Search

