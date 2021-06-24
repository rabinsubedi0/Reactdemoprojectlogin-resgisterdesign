
// import { AppBar,Toolbar,CssBaseline } from '@material-ui/core';
import React, { Component, useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import '../theme.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import a1 from '../img/a7.png';
class  Forgot extends Component {

    forgot() {
        alert("Success Forgot Password Now Login With New Password.")
    }''
    render(){
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
                                                <h1 className="userlogin">Forgot Password </h1>
                                                <hr />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">New Password  </label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" />
                                            </div>

                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Confirm Password  </label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                              
                                                <Button variant="contained" color="primary" onClick={this.forgot} className="form-group" aria-label="contained primary button group">
                                                    Forgot Password <ExitToAppRoundedIcon />
                                                </Button>
                                                  
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
}
export default Forgot;
