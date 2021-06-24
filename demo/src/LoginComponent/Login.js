
// import { AppBar,Toolbar,CssBaseline } from '@material-ui/core';
import React, { Component, useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import '../theme.css';
import a1 from '../img/a7.png';
import FB from '../img/facebook.png';
import GG from '../img/google.png';
import IG from '../img/instagram.png';


import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
 
export default function Login() {

        return (
        
                <div >
                <div className="container content" id="mybg" >
                    <div id="form_card">
                        <div className="row" id="border_line">
                        <div className="col-md-3"></div>
                            <div className="col-md-6" id="border_management" >
                                <div className="row">
                                    <div className="col-md-7">
                                        <form className="Loginform">
                                            <div className="formtitle">
                                                <h1 className="userlogin">User Login </h1>
                                                <hr />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password  </label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" />
                                            </div>
                                           
                                            <div className="form-group">
                                              
                                            <Button variant="contained" color="secondary" to="/home" className="form-group" aria-label="contained secondary button group">
                                                    <Link className="text-white" to='/home'>Login</Link> <ExitToAppRoundedIcon />
                                                </Button>
                                                <Link href="#" to="/forgot" className="ml-5" id="forgotpass">Forgot Password? </Link>
                                         </div>
                                            <div className="facebookicon mt-3 text-center">
                                                <Button href="https://www.facebook.com/"> <img src={FB} /></Button>
                                                <Button href="https://www.gmail.com/"> <img src={GG} /></Button>
                                                <Button href="https://www.instagram.com"> <img src={IG} /></Button>
                                            <Button> <Link to="/register" href="" className="register" >Don`t Have Account? Register</Link></Button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                    <div className="col-md-5">
                                        <div className="imageforregister">
                                            <img src={a1} className="image-responsive" alt="Snow" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                </div>
              

            
           
        );
    
}

