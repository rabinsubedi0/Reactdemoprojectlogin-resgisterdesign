
import './App.css';
import './theme.css';
import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './LoginComponent/Login';
import Register from './LoginComponent/Register';
import Homepage from './HomeComponent/Homepage';
import Footers from './HomeComponent/Footers';
import Profile from './HomeComponent/Profile';
import Nav from './NavbarComponent/index';
import { Route, BrowserRouter as Router, Link,Switch } from 'react-router-dom'
function App() {
  
  const getMode = () => {
    return JSON.parse( localStorage.getItem("mode")) || false
}

const [dark, setMode] = useState(getMode)
useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
    
}, [dark])
  return (
 
    <div className={dark ? "App dark-mode" : "App"} >
      <Nav></Nav>
      
      <Router forceRefresh={true}>
      <Switch>
     
     </Switch>
    </Router>
      <div className="darking">
    
        <label className="switch">
            <input type="checkbox"
            checked ={dark}
            onChange={()=> setMode(!dark)}
            />
            <span className="slider round"></span>
        </label>
      </div>
     <Footers></Footers>
      </div>

  );
}

export default App;
