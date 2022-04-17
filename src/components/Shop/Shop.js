import React, { Component } from 'react';
import './Shop.css';
import imgOne from './img/417O3dKVmaL_1.svg';
import imgTwo from './img/Rectangle_92.svg';
import imgThree from './img/iphone-12-blue-select-2020_1.svg';
import imgFour from './img/ipad-pro-12-select-cell-silver-202003_GEO_GB_FMT_WHH_1.svg';
import imgFive from './img/Rectangle_44_new.png';
import imgSix from './img/Rectangle_48_new.png';
import imgSeven from './img/Rectangle_93.svg'
// логотипы корзины
import CART from './button-img/Group_54.svg';
import LUPA from './button-img/Group_55.svg';
import LIKE from './button-img/Vector.svg';
import STRELKI from './button-img/Group_53.svg';

class Shop extends Component {

    state = {
        statusItemOne: false,
        statusItemTwo: false,
        statusItemThree: false,
        statusItemFour: false,
        statusItemFive: false,
        statusItemSix: false,
        statusItemSeven: false
    }
    render() {
        return (
            <section className='shop'>
                <div className='shop__container'>
                    <div className='shop__info'>
                        <h6>New shop</h6>
                        <h3>An enormous storehouse of facts</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is <br /> reproduced below for those interested.</p>
                    </div>
                    <div className='shop__items'>
                        <div>
                            <div
                                className='shop__items_container'
                                onMouseOver={() => this.setState({ statusItemOne: true })}
                                onMouseOut={() => this.setState({ statusItemOne: false })}
                            >
                                <div
                                    className={this.state.statusItemOne === false ?
                                        'shop__price-raiting-non'
                                        :
                                        'shop__price-raiting'
                                    }>
                                    <p className='shop__item-price'>$ 249.99
                                        <span className='shop__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                <img className='shop__items_container-img' src={imgOne} alt='img' />
                                <div
                                    className={this.state.statusItemOne === false ?
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
                            <div
                                className='shop__items_container'
                                onMouseOver={() => this.setState({ statusItemTwo: true })}
                                onMouseOut={() => this.setState({ statusItemTwo: false })}
                            >
                                <div
                                    className={this.state.statusItemTwo === false ?
                                        'shop__price-raiting-non'
                                        :
                                        'shop__price-raiting'
                                    }>
                                    <p className='shop__item-price'>$ 249.99
                                        <span className='shop__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                <img className='shop__items_container-img' src={imgFour} alt='img' />
                                <div
                                    className={this.state.statusItemTwo === false ?
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
                        </div>
                        <div>
                            <div
                                className='shop__items_container'
                                onMouseOver={() => this.setState({ statusItemThree: true })}
                                onMouseOut={() => this.setState({ statusItemThree: false })}
                            >
                                <div
                                    className={this.state.statusItemThree === false ?
                                        'shop__price-raiting-non'
                                        :
                                        'shop__price-raiting'
                                    }>
                                    <p className='shop__item-price'>$ 249.99
                                        <span className='shop__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                <img className='shop__items_container-img' src={imgTwo} alt='img' />
                                <div
                                    className={this.state.statusItemThree === false ?
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
                            <div
                                className='shop__items_container'
                                onMouseOver={() => this.setState({ statusItemFour: true })}
                                onMouseOut={() => this.setState({ statusItemFour: false })}
                            >
                                <div
                                    className={this.state.statusItemFour === false ?
                                        'shop__price-raiting-non'
                                        :
                                        'shop__price-raiting'
                                    }>
                                    <p className='shop__item-price'>$ 249.99
                                        <span className='shop__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                <img className='shop__items_container-img' src={imgFive} alt='img' />
                                <div
                                    className={this.state.statusItemFour === false ?
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
                            <div
                                className='shop__items_container'
                                onMouseOver={() => this.setState({ statusItemFive: true })}
                                onMouseOut={() => this.setState({ statusItemFive: false })}
                            >
                                <div
                                    className={this.state.statusItemFive === false ?
                                        'shop__price-raiting-non'
                                        :
                                        'shop__price-raiting'
                                    }>
                                    <p className='shop__item-price'>$ 249.99
                                        <span className='shop__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                <img className='shop__items_container-img' src={imgSeven} alt='img' />
                                <div
                                    className={this.state.statusItemFive === false ?
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
                        </div>
                        <div>
                            <div
                                className='shop__items_container'
                                onMouseOver={() => this.setState({ statusItemSix: true })}
                                onMouseOut={() => this.setState({ statusItemSix: false })}
                            >
                                <div
                                    className={this.state.statusItemSix === false ?
                                        'shop__price-raiting-non'
                                        :
                                        'shop__price-raiting'
                                    }>
                                    <p className='shop__item-price'>$ 249.99
                                        <span className='shop__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                <img className='shop__items_container-img' src={imgThree} alt='img' />
                                <div
                                    className={this.state.statusItemSix === false ?
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
                            <div
                                className='shop__items_container'
                                onMouseOver={() => this.setState({ statusItemSeven: true })}
                                onMouseOut={() => this.setState({ statusItemSeven: false })}
                            >
                                <div
                                    className={this.state.statusItemSeven === false ?
                                        'shop__price-raiting-non'
                                        :
                                        'shop__price-raiting'
                                    }>
                                    <p className='shop__item-price'>$ 249.99
                                        <span className='shop__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                <img className='shop__items_container-img' src={imgSix} alt='img' />
                                <div
                                    className={this.state.statusItemSeven === false ?
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
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Shop