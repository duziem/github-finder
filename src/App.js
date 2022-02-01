import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import UserItem from './components/UserItem';
import Home from './components/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


function App (){

    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar/>
              <div className= "container">
                <Alert />
                <Switch>
                  <Route exact path= '/' render= {props=> (
                    <Home {...props} />
                  )} />
                  <Route path='/user/:login' render= {props=>(
                    <UserItem {...props} />
                  )} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
  
    );
}

export default App;
