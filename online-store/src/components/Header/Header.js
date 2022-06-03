import React, { Component } from 'react';
import './Header.css';
import store from '../../redux/store';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cardLength: state.cardItems
    };
};

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
        let lengthCard = this.props.cardLength.length;
        console.log(this.props.cardLength);
        return (
            <header className="header">
                <div className='header__container'>
                    <div className="header__logo">
                        <img src='logo/Group_166.svg' alt="logo" />
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
                            <img src='buttons_img/Group_10.svg' className="load__img" alt="magnifier" />
                        </div>
                        <div className="header__user-space-item header__user-сard">
                            <Link to="/card">
                                <img src='buttons_img/Group_12.svg' className="load__img" alt="cart" />
                            </Link>
                            <div className={
                                lengthCard === 0 ?
                                    'header__user-card-quantity-none'
                                    : 'header__user-сard-quantity'
                            }
                            >{lengthCard}</div>
                        </div>
                        <div className="header__user-space-item">
                            <Link to="/registration">
                                <img src='buttons_img/Group_15.svg' className="load__img" alt="auth" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect(mapStateToProps)(Header);