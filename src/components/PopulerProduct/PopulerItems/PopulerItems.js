import React, { Component } from 'react';
import '../PopulerProduct.css';
import { ApiRequestAddCart } from '../../../API/ApiRequest';
// логотипы корзины
import CART from '../button-img/Group_54.svg';
import LUPA from '../button-img/Group_55.svg';
import LIKE from '../button-img/Vector.svg';
import STRELKI from '../button-img/Group_53.svg';
import RATING from '../../../image/Rating.svg';

class PopulerItems extends Component {

    state = {
        statusItem: false,
        data: [],
        rating: 5
    }

    clickButtonCart = (id) => {
        ApiRequestAddCart(id);
     }
 

    render() {
        const { img, name, price, id } = this.props;
        return (
            <div
                className='populer-product__item'
                onMouseOver={() => this.setState({ statusItem: true })}
                onMouseOut={() => this.setState({ statusItem: false })}
            >
                <p className='populer-product_sale'>Get up to 20% off Today Only!</p>
                <img className='populer-procuct_image' src={img} alt='mouse' />
                {this.state.statusItem === false ?
                    <div>
                        <h6 className='populer-product__item-title'>{name}</h6>
                        <p className='populer-product__item-price'>$ {price}
                            <span className='populer-product__item-price__span'> / $ {price}</span>
                        </p>
                        <div className='populer-product-rating'>
                            <div className='populer-product__rating-star'>
                                <img src={RATING} alt='star' />
                            </div>
                            <div className='populer-product__rating-star'>
                                <img src={RATING} alt='star' />
                            </div>
                            <div className='populer-product__rating-star'>
                                <img src={RATING} alt='star' />
                            </div>
                            <div className='populer-product__rating-star'>
                                <img src={RATING} alt='star' />
                            </div>
                            <div className='populer-product__rating-star'>
                                <img src={RATING} alt='star' />
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='populer-product__items-buttons'>
                            <div className='populer-product__item-button'
                            onClick={() => this.clickButtonCart(id)} type="button"
                            >
                                <img src={CART} alt='CART' />
                            </div>
                            <div className='populer-product__item-button'>
                                <img src={LUPA} alt='LUPA' />
                            </div>
                            <div className='populer-product__item-button'>
                                <img src={LIKE} alt='LIKE' />
                            </div>
                            <div className='populer-product__item-button'>
                                <img src={STRELKI} alt='STRELKI' />
                            </div>
                        </div>
                        <div className='populer-product__price__raiting__color'>
                            <div className='populer-product__price-raiting'>
                                <p className='populer-product__item-price'>$ {price}
                                    <span className='populer-product__item-price__span'> / $ {price}</span>
                                </p>
                                <div className='populer-product-rating'>
                                    {/* {this.state.data && this.state.data.find(item => item === item.rating) 
                                .map((item) => (
                                <div className='populer-product__rating-star'>
                                        <img src={RATING} alt='star' />
                                    </div>
                            ))} */}
                                    <div className='populer-product__rating-star'>
                                        <img src={RATING} alt='star' />
                                    </div>
                                    <div className='populer-product__rating-star'>
                                        <img src={RATING} alt='star' />
                                    </div>
                                    <div className='populer-product__rating-star'>
                                        <img src={RATING} alt='star' />
                                    </div>
                                    <div className='populer-product__rating-star'>
                                        <img src={RATING} alt='star' />
                                    </div>
                                    <div className='populer-product__rating-star'>
                                        <img src={RATING} alt='star' />
                                    </div>
                                </div>
                            </div>
                            <div className='populer-product__color'>
                                <div className='populer-product__item-color color-one'></div>
                                <div className='populer-product__item-color color-two'></div>
                                <div className='populer-product__item-color color-three'></div>
                            </div>
                        </div>
                    </div>}
            </div>

        )
    }
}

export default PopulerItems