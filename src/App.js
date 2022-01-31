import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import UserItem from './components/UserItem';
import Home from './components/Home';
import GithubState from './context/github/GithubState';


function App (){

  const [alert, setAlert]= useState(null);

  const showAlert= (msg, type)=>{
    setAlert({msg, type})
  }
  const clearAlert= ()=>{
    setAlert(null)
  }


    return (
      <GithubState>
        <Router>
          <div className="App">
            <Navbar/>
            <div className= "container">
              <Alert alert= {alert} clearAlert= {clearAlert} />
              <Switch>
                <Route exact path= '/' render= {props=> (
                  <Home {...props} setAlert= {showAlert} />
                )} />
                <Route path='/user/:login' render= {props=>(
                  <UserItem {...props} />
                )} />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
  
    );
}

export default App;
