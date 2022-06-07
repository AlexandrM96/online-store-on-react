import React, { Component } from 'react';
import '../Shop.css';
import { ApiRequestAddCart } from '../../../API/ApiRequest';

class ShopItems extends Component {

    state = {
        statusItem: false,

    }

    clickButtonCart = (id) => {
        ApiRequestAddCart(id);
    }

    render() {
        const { img, price, id, sale, sale_count  } = this.props;
        return (
            <div
                className='shop__items_container'
                onMouseOver={() => this.setState({ statusItem: true })}
                onMouseOut={() => this.setState({ statusItem: false })}
            >
                <div
                    className={this.state.statusItem === false ?
                        'shop__price-raiting-non'
                        :
                        'shop__price-raiting'
                    }>
                    {/* <p className='shop__item-price'>{price}
                        <span className='shop__item-price__span'> / $ {price}</span>
                    </p> */}
                    {sale === true   ?
                            <p className='shop__item-price'>$ {+price - (+price * (sale_count / 100))}
                                <span className='shop__item-price__span'> / $ {price}</span></p>
                            :
                            <p className='shop__item-price'>$ {price}</p>
                        }
                    {/* <div>рейтинг</div> */}
                </div>
                <img className='shop__items_container-img' src={img} alt='img' />
                <div
                    className={this.state.statusItem === false ?
                        'shop__item-buttons-non'
                        :
                        'shop__item-buttons'
                    }>
                    <div className='shop__item-button'
                    onClick={() => this.clickButtonCart(id)} type="button"
                    > 
                        <img src='buttons_img/Group_54.svg' alt='CART' />
                    </div>
                    <div className='shop__item-button'>
                        <img src='buttons_img/Group_55.svg' alt='LUPA' />
                    </div>
                    <div className='shop__item-button'>
                        <img src='buttons_img/Vector.svg' alt='LIKE' />
                    </div>
                    <div className='shop__item-button'>
                        <img src='buttons_img/Group_53.svg' alt='STRELKI' />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopItems