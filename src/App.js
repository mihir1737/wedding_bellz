import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
 import Home from './components/Home.component'
 import Register from './components/Register.component'
 import Login from './components/Login.component'
 import Navibar from './components/Navibar.component'
 import Profile from './components/profile.component'
class App extends Component {
  render() {
    return (
      <div>
        <Navibar/>
        <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path='/profile' component={Profile}/>
        </Router>
      </div>
    )
  }
}

export default App
