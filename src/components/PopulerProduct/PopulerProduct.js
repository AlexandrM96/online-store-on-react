import React, { Component } from 'react';
import './PopulerProduct.css';
import { ApiRequest } from '../../API/ApiRequest';
import store from '../../redux/store';
import PopulerItems from './PopulerItems/PopulerItems';
import VIEWALL from './button-img/Group_160.svg';
import { Link } from 'react-router-dom';

class PopulerProduct extends Component {

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
            <section className='populer-product'>
                <div className='populer-product__container'>
                    <div className='populer-product__header'>
                        <h4>New Product</h4>
                        <h2>Popular Products</h2>
                        <div className='populer-product__navigation'>
                            {/* Недавнее прибытие */}
                            <div className='populer-product__navigation-element'>Recent arrival</div>
                            {/* лучшие продавцы */}
                            <div className='populer-product__navigation-element'>Best sellers</div>
                            {/* специальные предложения */}
                            <div className='populer-product__navigation-element'>Special offers</div>
                            {/* представленный в */}
                            <div className='populer-product__navigation-element'>Featured in</div>
                        </div>
                    </div>
                    <div className='populer-product__items-block'>
                        {this.state.data && this.state.data.filter((item) =>
                            item.rating === '5').map((item) => (
                                <PopulerItems {...item}/>
                            ))}
                    </div>
                    <div className='pupuler-product__view-all-container'>
                    <Link className='pupuler-product__view-all-button' to="/allItems">
                            {/* <div className='pupuler-product__view-all-button'> */}
                                <p>viev all</p>
                                <img src={VIEWALL} alt='VIEWALL' />
                            {/* </div> */}
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default PopulerProduct
