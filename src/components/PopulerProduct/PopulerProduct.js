import React, { Component } from 'react';
import './PopulerProduct.css';
import MOUSE from './img/Rectangle_85.svg';
import COLONKA from './img/Rectangle_86.svg';
import KEYBOARD from './img/51lpfDERgyL_1.svg';
import MACKBOOK from './img/Rectangle_90.svg';
import HEADPHONE from './img/Rectangle_89.svg';
import SPEACKER from './img/Rectangle_88.svg';
// логотипы корзины
import CART from './button-img/Group_54.svg';
import LUPA from './button-img/Group_55.svg';
import LIKE from './button-img/Vector.svg';
import STRELKI from './button-img/Group_53.svg';
import VIEWALL from './button-img/Group_160.svg';

class PopulerProduct extends Component {

    state = {
        statusItemOne: false,
        statusItemTwo: false,
        statusItemThree: false,
        statusItemFour: false,
        statusItemFive: false,
        statusItemSix: false,
    }
    componentDidMount() {
        const url = 'http://localhost:3000/home'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log('dataa', data);
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <section className='populer-product'>
                <div className='populer-product_container'>
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
                        <div
                            className='populer-product__item'
                            onMouseOver={() => this.setState({ statusItemOne: true })}
                            onMouseOut={() => this.setState({ statusItemOne: false })}
                        >
                            <p className='populer-product_sale'>Get up to 20% off Today Only!</p>
                            <img className='populer-procuct_image' src={MOUSE} alt='mouse' />
                            {this.state.statusItemOne === false ?
                                <div>
                                    <h6 className='populer-product__item-title'>Mouse Apple</h6>
                                    <p className='populer-product__item-price'>$ 249.99
                                        <span className='populer-product__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                :
                                <div>
                                    <div className='populer-product__items-buttons'>
                                        <div className='populer-product__item-button'>
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
                                            <p className='populer-product__item-price'>$ 249.99
                                                <span className='populer-product__item-price__span'> / $ 249.99</span>
                                            </p>
                                            {/* <div>рейтинг</div> */}
                                        </div>
                                        <div className='populer-product__color'>
                                            <div className='populer-product__item-color color-one'></div>
                                            <div className='populer-product__item-color color-two'></div>
                                            <div className='populer-product__item-color color-three'></div>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        <div className='populer-product__item'
                            onMouseOver={() => this.setState({ statusItemTwo: true })}
                            onMouseOut={() => this.setState({ statusItemTwo: false })}
                        >
                            <p className='populer-product_sale'>Get up to 20% off Today Only!</p>
                            <img className='populer-procuct_image' src={COLONKA} alt='colonka' />
                            {this.state.statusItemTwo === false ?
                                <div>
                                    <h6 className='populer-product__item-title'>Black iPhone Speaker</h6>
                                    <p className='populer-product__item-price'>$ 249.99
                                        <span className='populer-product__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                :
                                <div>
                                    <div className='populer-product__items-buttons'>
                                        <div className='populer-product__item-button'>
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
                                            <p className='populer-product__item-price'>$ 249.99
                                                <span className='populer-product__item-price__span'> / $ 249.99</span>
                                            </p>
                                            {/* <div>рейтинг</div> */}
                                        </div>
                                        <div className='populer-product__color'>
                                            <div className='populer-product__item-color color-one'></div>
                                            <div className='populer-product__item-color color-two'></div>
                                            <div className='populer-product__item-color color-three'></div>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        <div className='populer-product__item'
                            onMouseOver={() => this.setState({ statusItemThree: true })}
                            onMouseOut={() => this.setState({ statusItemThree: false })}
                        >
                            <p className='populer-product_sale'>Get up to 20% off Today Only!</p>
                            <img className='populer-procuct_image' src={KEYBOARD} alt='keyboard' />
                            {this.state.statusItemThree === false ?
                                <div>
                                    <h6 className='populer-product__item-title'>iOS Keyboard</h6>
                                    <p className='populer-product__item-price'>$ 249.99
                                        <span className='populer-product__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                :
                                <div>
                                    <div className='populer-product__items-buttons'>
                                        <div className='populer-product__item-button'>
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
                                            <p className='populer-product__item-price'>$ 249.99
                                                <span className='populer-product__item-price__span'> / $ 249.99</span>
                                            </p>
                                            {/* <div>рейтинг</div> */}
                                        </div>
                                        <div className='populer-product__color'>
                                            <div className='populer-product__item-color color-one'></div>
                                            <div className='populer-product__item-color color-two'></div>
                                            <div className='populer-product__item-color color-three'></div>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        <div className='populer-product__item'
                            onMouseOver={() => this.setState({ statusItemFour: true })}
                            onMouseOut={() => this.setState({ statusItemFour: false })}
                        >
                            <p className='populer-product_sale'>Get up to 20% off Today Only!</p>
                            <img className='populer-procuct_image' src={MACKBOOK} alt='apple' />
                            {this.state.statusItemFour === false ?
                                <div>
                                    <h6 className='populer-product__item-title'>Mackbook Pro</h6>
                                    <p className='populer-product__item-price'>$ 2049.99
                                        <span className='populer-product__item-price__span'> / $ 2049.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                :
                                <div>
                                    <div className='populer-product__items-buttons'>
                                        <div className='populer-product__item-button'>
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
                                            <p className='populer-product__item-price'>$ 249.99
                                                <span className='populer-product__item-price__span'> / $ 249.99</span>
                                            </p>
                                            {/* <div>рейтинг</div> */}
                                        </div>
                                        <div className='populer-product__color'>
                                            <div className='populer-product__item-color color-one'></div>
                                            <div className='populer-product__item-color color-two'></div>
                                            <div className='populer-product__item-color color-three'></div>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        <div className='populer-product__item'
                            onMouseOver={() => this.setState({ statusItemFive: true })}
                            onMouseOut={() => this.setState({ statusItemFive: false })}
                        >
                            <p className='populer-product_sale'>Get up to 20% off Today Only!</p>
                            <img className='populer-procuct_image' src={HEADPHONE} alt='headphone' />
                            {this.state.statusItemFive === false ?
                                <div>
                                    <h6 className='populer-product__item-title'>Black Headphone</h6>
                                    <p className='populer-product__item-price'>$ 249.99
                                        <span className='populer-product__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                :
                                <div>
                                    <div className='populer-product__items-buttons'>
                                        <div className='populer-product__item-button'>
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
                                            <p className='populer-product__item-price'>$ 249.99
                                                <span className='populer-product__item-price__span'> / $ 249.99</span>
                                            </p>
                                            {/* <div>рейтинг</div> */}
                                        </div>
                                        <div className='populer-product__color'>
                                            <div className='populer-product__item-color color-one'></div>
                                            <div className='populer-product__item-color color-two'></div>
                                            <div className='populer-product__item-color color-three'></div>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        <div className='populer-product__item'
                            onMouseOver={() => this.setState({ statusItemSix: true })}
                            onMouseOut={() => this.setState({ statusItemSix: false })}
                        >
                            <p className='populer-product_sale'>Get up to 20% off Today Only!</p>
                            <img className='populer-procuct_image' src={SPEACKER} alt='speacker' />
                            {this.state.statusItemSix === false ?
                                <div>
                                    <h6 className='populer-product__item-title'>iPhone Speaker</h6>
                                    <p className='populer-product__item-price'>$ 249.99
                                        <span className='populer-product__item-price__span'> / $ 249.99</span>
                                    </p>
                                    {/* <div>рейтинг</div> */}
                                </div>
                                :
                                <div>
                                    <div className='populer-product__items-buttons'>
                                        <div className='populer-product__item-button'>
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
                                            <p className='populer-product__item-price'>$ 249.99
                                                <span className='populer-product__item-price__span'> / $ 249.99</span>
                                            </p>
                                            {/* <div>рейтинг</div> */}
                                        </div>
                                        <div className='populer-product__color'>
                                            <div className='populer-product__item-color color-one'></div>
                                            <div className='populer-product__item-color color-two'></div>
                                            <div className='populer-product__item-color color-three'></div>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                    <div className='pupuler-product__view-all-container'>
                        <div className='pupuler-product__view-all-button'>
                            <p>viev all</p>
                            <img src={VIEWALL} alt='VIEWALL'/>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PopulerProduct