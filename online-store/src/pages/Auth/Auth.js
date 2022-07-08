import React, { Component } from 'react';
import './Auth.css'
import Registration from '../../components/Registration/Registration';
import Login from '../../components/Login/Login';
import { connect } from 'react-redux';
import store from '../../redux/store';

const mapStateToProps = (state) => {
    return {
        registration: state.registration
    };
};

class Auth extends Component {
    state = {
        regist: false
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                regist: state.registration
                
            });
        });
    }

    render() {
        const reg = this.props.registration;
        console.log(this.props);
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