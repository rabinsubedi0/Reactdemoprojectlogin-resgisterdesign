
// import { AppBar,Toolbar,CssBaseline } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import '../App.css';
import a1 from '../img/a7.png';
import FB from '../img/facebook.png';
import GG from '../img/google.png';
import IG from '../img/instagram.png';
import { Route, BrowserRouter as Router, Link,Switch } from 'react-router-dom'
class Register extends Component {

        constructor()
        {
            super()
            {
                this.state = {
                    input: {},
                    message: {}
                }
            }
            this.passwordConfirm = this.passwordConfirm.bind(this);
            this.handle = this.handle.bind(this);
        }
        passwordConfirm(e)
        {
            var inputpassword = this.state.input;
            inputpassword[e.target.name] = e.target.value;
            this.setState({
                inputpassword
            });
        }
        validation()
        {
            var message = {};
            if (this.state.input["password"] !== this.state.input["confirmpass"])
            {
                message["password"] = "Password  & confirm password is wrong";
            }
            else if (this.state.input["password"] > 5)
            {
                message["password"] ="Password must be 8-16 digit.";
            }
            else if (this.state.input["password"] < 16)
            {
                message["password"]="Password must be less than 16 ."
                }
            else
            {
                message["confirmpass"] = "";
            }
            this.setState({
                message: message
            });
    }
    handle(e) {
        e.preventDefault();
        if (this.validation())
        {
            var input = {};
            input["password"] = "";
            input["confirmpass"] = "";
            }
    }
        render()
        {
            return (
               
                    <div id="mybg" >
                        <div className="container" >
                            <div id="form_card">
                                <div className="row" id="border_line">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6" id="border_management" >
                              
                                    
                                        <form className="Loginform" onSubmit={this.handle}>
                                            <div className="formtitle">
                                                <h1 className="userlogin">Register User </h1>
                                                <hr />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">

                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">User Name</label>
                                                        <input type="text" className="form-control" id="exampleInputName1"   placeholder="Enter name" required />
                                                    </div>
                                                
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Password  </label>
                                                        <input type="password" name="password" className="form-control" value={this.state.input.password} onChange={this.passwordConfirm} id="exampleInputPassword1" required placeholder="Password" required />
                                                    </div>
                                                
                                                    <div className="form-group">
                                                        <label for="exampleInputPassword1">Confirm Password  </label>
                                                        <input type="password" name="confirmpass" className="form-control" value={this.state.input.confpassword} onChange={this.passwordConfirm} id="exampleInputPassword2" required placeholder="Password" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-center">
                                              
                                                <button variant="contained" color="primary" className="form-group btn btn-primary" aria-label="contained primary button group">
                                                    Register <ExitToAppRoundedIcon />
                                                </ button>
                                                <strong>
                                                <div className="text-danger">{this.state.message.password}</div>
                                                <div className="text-danger">{ this.state.message.confirmpass}</div>
                                                </strong>
                                            </div>
                                            <div className="text-center">
                                                <Link href="#" to="/" id="alreadyaccount">Already Have Account? Signin </Link>
                                            </div>
                                       
                                            <div className="facebookicon mt-3 text-center">
                                                <Button> <img src={FB} /></Button>
                                                <Button> <img src={GG} /></Button>
                                                <Button> <img src={IG} /></Button>
                                            </div>
                                           
                                        </form>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

               
               
            );
        }
    
}

export default Register;