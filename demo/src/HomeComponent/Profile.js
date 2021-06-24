import { Class, Delete } from '@material-ui/icons';
import React, {Component} from 'react'

import '../theme.css';
class Profile extends Component {
    myClick() {
        alert("Do you want to delet this data?")
    }
    
    render() {
        
        return (
          
    
        <div>
            <div className="profilepage">
                <div className="card">
                    <div className="card-body">
                        <h4 className="text-center">Profile Details</h4>
                        <hr />
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="profile_information">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">S.N</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Password</th>
                                                        <th scope="col">Acrion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Rabin</td>
                                                        <td>rabinsubedi008@gmail.com</td>
                                                        <td>Rabin@#123</td>
                                                        <td>
                                                    <a className="btn btn btn-success mr-2">Edit</a>
                                                    <button type="submit" className="btn btn-danger" onClick={this.myClick} >Delete</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Profile;