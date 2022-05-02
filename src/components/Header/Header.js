import React, { Component } from 'react';
import './Header.css';
import store from '../../redux/store';
import { Link } from 'react-router-dom';
import Group_10 from './img/Group_10.svg';
import Group_12 from './img/Group_12.svg';
import Group_15 from './img/Group_15.svg';
import Group_165 from './img/Group_165.svg';
class Header extends Component {
    state = {
        cardLength: [],
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                cardLength: state.cardItems,
            });
        });
    };

    render() {
        let lengthCard = this.state.cardLength.length;
        return (
            <header className="header">
                <div className='header__container'>
                    <div className="header__logo">
                        <img src={Group_165} alt="logo" />
                    </div>
                    <ul className="header__navigation">
                        <li>
                            <Link className='header__navigation-link' to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className='header__navigation-link' to="/aboute">ABOUTE</Link>
                        </li>
                        <li>
                            <Link className='header__navigation-link' to="/allItems">PRODUCT</Link>
                        </li>
                        <li>
                            <Link className='header__navigation-link' to="/blog">BLOG</Link>
                        </li>
                        <li>
                            <Link className='header__navigation-link' to="/shop">SHOP</Link>
                        </li>
                        <li>
                            <Link className='header__navigation-link' to="/contact">CONTACT US</Link>
                        </li>
                    </ul>
                    <div className="header__user-space">
                        <div className="header__user-space-item">
                            <img src={Group_10} className="load__img" alt="magnifier" />
                        </div>
                        <div className="header__user-space-item header__user-сard">
                            <Link to="/card">
                                <img src={Group_12} className="load__img" alt="cart" />
                            </Link>
                            <div className={
                                lengthCard === 0 ?
                                    'header__user-card-quantity-none'
                                    : 'header__user-сard-quantity'
                            }
                            >{lengthCard}</div>
                        </div>
                        <div className="header__user-space-item">
                            <img src={Group_15} className="load__img" alt="auth" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;