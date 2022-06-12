import React, { Component } from 'react';
import './Auth.css'
import Registration from '../../components/Registration/Registration';
import Login from '../../components/Login/Login';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        registration: state.registration
    };
};

class Auth extends Component {
    state = {
        regist: false
    }

    render() {
        const reg = this.props.registration;
        return (
            <div className='auth'>
                <div className='auth__container'>
                    { reg === false ?
                        <Login />
                        :
                        <Registration />
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Auth);