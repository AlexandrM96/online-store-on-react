import React, { Component } from 'react';
import './Shop.css';
import { ApiRequest } from '../../API/ApiRequest';
import store from '../../redux/store';
import ShopItems from './ShopItems/ShopItems';

class Shop extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        ApiRequest();
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                data: state.newItems[0]
            });
        });
    };

    render() {
        console.log(this.state.data);
        return (
            <section className='shop'>
                <div className='shop__container'>
                    <div className='shop__info'>
                        <h6>New shop</h6>
                        <h3>An enormous storehouse of facts</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is <br /> reproduced below for those interested.</p>
                    </div>
                    <div className='shop__items'>
                        {this.state.data && this.state.data.filter((item) =>
                            item.id >= 16).map((item) => (
                                <ShopItems {...item} />
                            ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Shop
