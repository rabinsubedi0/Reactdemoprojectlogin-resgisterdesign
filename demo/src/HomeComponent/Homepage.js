
// import { AppBar,Toolbar,CssBaseline } from '@material-ui/core';
import React, { Component, useState, useEffect } from 'react';
import '../theme.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Timetable from './Timetable'
export default function Homepage() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  const [dark, setMode] = useState(getMode)
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))

  }, [dark])

  return (

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          rabinsubedi008@gmail.com
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link  to="/profile" class="dropdown-item"  >Profile</Link>  
          <Link class="dropdown-item" to="/"  href="#">Logout</Link>  
        </div>
      </li>
    </ul>
  </div>
      </nav>
      
  <div className="homepagehead">
     <Timetable></Timetable>
  </div>
      </div>
      
    
  );

}

