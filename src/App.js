import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
 import Home from './components/Home.component'
 import Register from './components/Register.component'
 import Login from './components/Login.component'
 import Navibar from './components/Navibar.component'
 import Profile from './components/profile.component'
 import BridalWear from './components/services/BridalWear.component'
 import GroomWear from './components/services/GroomWear.component'
 import MakeUp from './components/services/MakeUp.component'
 import Photographer from './components/services/Photographer.component'
 import Venue from './components/services/Venue.component'
 import Cart from './components/Cart.component'
 import InsertService from './components/services/InsertService.component'
 import Feedback from './components/Feedback.component'
 import Portfolio from './components/Portfolio.component'
 import Package from './components/PackagePlan'
import GoldenPackage from './components/GoldPackage';
import DiamondPackage from './components/DiamondPackage';
import SilverPackage from './components/SilverPackage';
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
        <Route path='/services/bridalwear' component={BridalWear}/>
        <Route path='/services/groomwear' component={GroomWear}/>
        <Route path='/services/makeup' component={MakeUp}/>
        <Route path='/services/photographer' component={Photographer}/>
        <Route path='/services/venue' component={Venue}/> 
        <Route path='/feedback' component={Feedback}/> 
        <Route path='/cart' render={(props) => <Cart {...props}/>}/>
        <Route path='/insert' component={InsertService}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/package' component={Package}/>
        <Route path='/goldPackage' component={GoldenPackage}/>
        <Route path='/diamondPackage' component={DiamondPackage}/>
        <Route path='/silverPackage' component={SilverPackage}/>
        </Router>
      </div>
    )
  }
}

export default App