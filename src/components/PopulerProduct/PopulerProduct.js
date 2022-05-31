import React, { Component } from 'react';
import './PopulerProduct.css';
import { ApiRequest } from '../../API/ApiRequest';
import store from '../../redux/store';
import PopulerItems from './PopulerItems/PopulerItems';
import { Link } from 'react-router-dom';

class PopulerProduct extends Component {

    state = {
        data: [],
        bestSellers: true,
        specialOffers: false
    }

    clickBestSellers = () => {
        this.state.bestSellers === false ?
            this.setState({ bestSellers: true, specialOffers: false })
            :
            this.setState({ bestSellers: true })
    }

    clickSpecialOffers = () => {
        this.state.specialOffers === false ?
            this.setState({ bestSellers: false, specialOffers: true })
            :
            this.setState({ specialOffers: true })
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
                            <div onClick={() => this.clickBestSellers()} className='populer-product__navigation-element'>
                                Best sellers
                            </div>
                            {/* специальные предложения */}
                            <div onClick={() => this.clickSpecialOffers()} className='populer-product__navigation-element'>
                                Special offers
                            </div>
                            {/* представленный в */}
                            <div className='populer-product__navigation-element'>Featured in</div>
                        </div>
                    </div>
                    <div className='populer-product__items-block'>
                        {this.state.bestSellers === true ?
                            this.state.data && this.state.data.filter((item) =>
                                item.rating === '5').map((item) => (
                                    <div key={item.id}>
                                        <PopulerItems {...item} />
                                    </div>
                                ))
                            :
                            this.state.data && this.state.data.filter((item) =>
                                item.sale === true).map((item) => (
                                    <div key={item.id}>
                                        <PopulerItems {...item} />
                                    </div>
                                ))
                        }
                    </div>
                    <div className='pupuler-product__view-all-container'>
                        <Link className='pupuler-product__view-all-button' to="/allItems">
                            {/* <div className='pupuler-product__view-all-button'> */}
                            <p>viev all</p>
                            <img src='buttons_img/Group_160.svg' alt='VIEWALL' />
                            {/* </div> */}
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default PopulerProduct
