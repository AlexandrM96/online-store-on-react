import React, { Component } from 'react';
import '../Shop.css';
// логотипы корзины
import CART from '../button-img/Group_54.svg';
import LUPA from '../button-img/Group_55.svg';
import LIKE from '../button-img/Vector.svg';
import STRELKI from '../button-img/Group_53.svg';

class ShopItems extends Component {

    state = {
        statusItem: false,

    }
    render() {
        const { img, price } = this.props;
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
                    <p className='shop__item-price'>{price}
                        <span className='shop__item-price__span'> / $ {price}</span>
                    </p>
                    {/* <div>рейтинг</div> */}
                </div>
                <img className='shop__items_container-img' src={img} alt='img' />
                <div
                    className={this.state.statusItem === false ?
                        'shop__item-buttons-non'
                        :
                        'shop__item-buttons'
                    }>
                    <div className='shop__item-button'>
                        <img src={CART} alt='CART' />
                    </div>
                    <div className='shop__item-button'>
                        <img src={LUPA} alt='LUPA' />
                    </div>
                    <div className='shop__item-button'>
                        <img src={LIKE} alt='LIKE' />
                    </div>
                    <div className='shop__item-button'>
                        <img src={STRELKI} alt='STRELKI' />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopItems