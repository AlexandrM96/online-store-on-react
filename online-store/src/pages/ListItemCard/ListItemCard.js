import React, { Component } from 'react';
import './ListItemCard.css';
import store from '../../redux/store';
import CardItem from './CardItem';
import { ApiRequest } from '../../API/ApiRequest';
import { Link } from 'react-router-dom';
class ListItemCard extends Component {

    state = {
        cardItem: [],
        cardSum: 0
    }

    totalSum = () => {
        const cartSumm = this.state.cardItem;
        return cartSumm.reduce((acc, item) => +acc + (+item.price * item.quantity_in_the_basket), 0);
    }

    componentDidMount = () => {
        ApiRequest();
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                cardItem: state.cardItems,
                cardSum: state.cardSum
            });
        });
    };
    render() {
        return (
            <section className='list-item-card'>
                <div className='list-item-card__container'>
                    <h1>Shopping bag</h1>
                    <div className='list-item-card__items'>
                        <div className='list-item-card__items-list'>
                            {this.state.cardItem && this.state.cardItem.map((item) => (
                                <div key={item.id}>
                                    <CardItem {...item} />
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className='list-item-card__sum-buttons'>
                            <div className='list-item-card__sum-result'>Total: {this.totalSum()} $</div>
                            <div className='list-item-card__sum-result-container'>
                                <Link className='list-item-card__sum-result-link' to='/'>
                                    <div className='list-item-card__button-one'>Continue shopping</div>
                                </Link>
                                <button className='list-item-card__button-two'>Buy a product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ListItemCard