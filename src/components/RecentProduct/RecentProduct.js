import React, { Component } from 'react';
import './RecentProduct.css';
import store from '../../redux/store';
import RecentItem from './RecentItem';
import { ApiRequest } from '../../API/ApiRequest';

class RecentProduct extends Component {
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
        return (
            <section className='recent-product'>
                <div className='recent-product__items'>
                    {this.state.data && this.state.data.filter((item) =>
                        item.rating === '4').map((item) => (
                            <div className='recent-product__item'>
                                <div key={item.id}>
                                    <RecentItem {...item} />
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        )
    }
}

export default RecentProduct
