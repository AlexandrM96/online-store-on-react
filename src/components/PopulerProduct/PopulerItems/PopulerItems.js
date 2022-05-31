import React, { Component } from 'react';
import '../PopulerProduct.css';
import { ApiRequestAddCart } from '../../../API/ApiRequest';
// import RATING from '../../../img/Rating.svg';

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
        const { img, name, price, id, rating, sale, sale_count } = this.props;
        return (
            <div
                className={sale === true ? 'populer-product__item' : 'populer-product__item-no-sale'}
                onMouseOver={() => this.setState({ statusItem: true })}
                onMouseOut={() => this.setState({ statusItem: false })}
            >
                {sale === true ? <p className='populer-product_sale'>Get up to {sale_count}% off Today Only!</p> : false}
                <img className='populer-procuct_image' src={img} alt='mouse' />
                {this.state.statusItem === false ?
                    <div>
                        <h6 className='populer-product__item-title'>{name}</h6>
                        {sale === true ?
                            <p className='populer-product__item-price'>$ {+price - (+price * (sale_count / 100))}
                                <span className='populer-product__item-price__span'> / $ {price}</span></p>
                            :
                            <p className='populer-product__item-price'>$ {price}</p>
                        }
                        <div className='populer-product-rating'>
                            {this.state.data && Array.apply(null, { length: +rating }).map((e, i) => (
                                <div className='populer-product__rating-star' key={i}>
                                    <img src='loader/Rating.svg' alt='star' />
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div>
                        <div className='populer-product__items-buttons'>
                            <div className='populer-product__item-button'
                                onClick={() => this.clickButtonCart(id)} type="button"
                            >
                                <img src='buttons_img/Group_54.svg' alt='CART' />
                            </div>
                            <div className='populer-product__item-button'>
                                <img src='buttons_img/Group_55.svg' alt='LUPA' />
                            </div>
                            <div className='populer-product__item-button'>
                                <img src='buttons_img/Vector.svg' alt='LIKE' />
                            </div>
                            <div className='populer-product__item-button'>
                                <img src='buttons_img/Group_53.svg' alt='STRELKI' />
                            </div>
                        </div>
                        <div className='populer-product__price__raiting__color'>
                            <div className='populer-product__price-raiting'>
                                {sale === true ?
                                    <p className='populer-product__item-price'>$ {+price - (+price * (sale_count / 100))}
                                        <span className='populer-product__item-price__span'> / $ {price}</span></p>
                                    :
                                    <p className='populer-product__item-price'>$ {price}</p>
                                }
                                <div className='populer-product-rating'>
                                    {this.state.data && Array.apply(null, { length: +rating }).map((e, i) => (
                                        <div className='populer-product__rating-star' key={i}>
                                            <img src='loader/Rating.svg' alt='star' />
                                        </div>
                                    ))}
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