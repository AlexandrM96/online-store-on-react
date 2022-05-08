import React, { Component } from 'react';
import { ApiRequestAddCart } from '../../../API/ApiRequest';
// логотипы корзины
import CART from '../../../button-img/Group_54.svg';
import LUPA from '../../../button-img/Group_55.svg';
import LIKE from '../../../button-img/Vector.svg';
import STRELKI from '../../../button-img/Group_53.svg';
import RATING from '../../../image/Rating.svg';

class ListOfItems extends Component {

    state = {
        statusItem: false,
        data: []
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
                                    <img src={RATING} alt='star' />
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
                                {sale === true ?
                                    <p className='populer-product__item-price'>$ {+price - (+price * (sale_count / 100))}
                                        <span className='populer-product__item-price__span'> / $ {price}</span></p>
                                    :
                                    <p className='populer-product__item-price'>$ {price}</p>
                                }
                                <div className='populer-product-rating'>
                                    {this.state.data && Array.apply(null, { length: +rating }).map((e, i) => (
                                        <div className='populer-product__rating-star' key={i}>
                                            <img src={RATING} alt='star' />
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

export default ListOfItems