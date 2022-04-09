import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Group_10 from './img/Group_10.svg';
import Group_12 from './img/Group_12.svg';
import Group_15 from './img/Group_15.svg';
import Group_165 from './img/Group_165.svg';
class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <img src={Group_165} alt="logo" />
                </div>
                <ul className="header__navigation">
                    <li>
                        <Link className='header__navigation-link' to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className='header__navigation-link' to="/">ABOUTE</Link>
                    </li>
                    <li>
                        <Link className='header__navigation-link' to="/">PRODUCT</Link>
                    </li>
                    <li>
                        <Link className='header__navigation-link' to="/">BLOG</Link>
                    </li>
                    <li>
                        <Link className='header__navigation-link' to="/">SHOP</Link>
                    </li>
                    <li>
                        <Link className='header__navigation-link' to="/">CONTACT US</Link>
                    </li>
                </ul>
                <div className="header__user-space">
                    <div>
                        <img src={Group_10} className="load__img" alt="magnifier" />
                    </div>
                    <div>
                        <img src={Group_12} className="load__img" alt="cart" />
                    </div>
                    <div>
                        <img src={Group_15} className="load__img" alt="auth" />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;