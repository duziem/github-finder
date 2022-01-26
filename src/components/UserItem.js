import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import Repos from './Repos';


export class UserItem extends Component {

  componentDidMount(){
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes= {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  }

  render() {
    console.log(this.props.user);
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      hireable,
      public_repos,
      public_gist
    }= this.props.user;

    const {loading, repos}= this.props;

    return (

      loading ?
      <Spinner/> :
      <>
        <Link to= "/" className= 'btn btn-light'> Back to search</Link>
        Hireable: {' '}{hireable ? <i className='fas fa-check text-success'></i> : <i className="fas fa-times-circle text-danger"></i>}
        <div className="card grid-2">
          <div className="all-center">
            <img src= {avatar_url} alt="" className="round-img" style={{width: '150px'}}/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
            <ul>
              <li>
                {login && 
                <>
                  <strong>Username: </strong> {login}
                </>}
              </li>
              <li>
                {company && 
                <>
                  <strong>Company: </strong> {company}
                </>}
              </li>
              <li>
                {login && 
                <>
                  <strong>Website: </strong> {blog}
                </>}
              </li>
            </ul>
          </div>
          <div className="cad text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">Public_repos: {public_repos}</div>
            <div className="badge badge-dark">Public_gist: {public_gist}</div>
          </div>
        </div>
        <Repos repos= {repos} />
      </>
    );
  }
}

export default UserItem;