import React, { Component } from 'react';
import './Account.css'


class Account extends Component {

    render() {
        return (
            <div className='account'>
                <h3 className='account__title'>Profile</h3>
                <div className='account__container'>
                    <div className='account__container-info'>

                    </div>
                    <div className='account__container-navigate'>
                        <div className='account__container-navigate__element'>Profile Info</div>
                        <div className='account__container-navigate__element'>Profile Settings</div>
                        <div className='account__container-navigate__element'>Order history</div>
                        <div className='account__container-navigate__element'>Shopping cart</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account