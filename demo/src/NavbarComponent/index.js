
import LOGO from '../img/4307.png'
import Register from '../LoginComponent/Register';
import Login from '../LoginComponent/Login';
import Homepage from '../HomeComponent/Homepage';
import Profile from '../HomeComponent/Profile'
import Forgot from '../LoginComponent/Forgot'
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
export default function Index() {

    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false
    }

    const [dark, setMode] = useState(getMode)
    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(dark))

    }, [dark])

    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand" href="#"><img src={LOGO} className="iimg" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/home' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about' >About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/" >Login</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/register' >Register</Link>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

            <Switch>
                <Route path="/register" component={Register}></Route>
                <Route path="/home" component={Homepage}></Route>
                <Route path="/forgot"  component={Forgot}></Route>
                <Route path="/" exact component={Login}></Route>
                <Route path="/profile" exact component={Profile}></Route>
            </Switch>


        </Router>


    );

}
