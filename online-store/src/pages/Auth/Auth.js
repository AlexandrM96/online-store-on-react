import React, { Component } from 'react';
import './Auth.css'
import Registration from '../../components/Registration/Registration';
import Login from '../../components/Login/Login';

class Auth extends Component {
    state = {
        regist: true
    }
    
    render() {
        return (
            <div className='auth'>
                <div className='auth__container'>
                    {this.state.regist === false ?
                        <Registration />
                        :
                        <Login />}
                </div>
            </div>
        )
    }
}

export default Auth