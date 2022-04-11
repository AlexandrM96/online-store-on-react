import React, { Component } from 'react';
import './RecentProduct.css';
import Beats from './img/Rectangle_53.svg';
import BlackIphoneSpeaker from './img/Rectangle_39.svg';

class RecentProduct extends Component {
    render() {
        return (
            <section className='recent-product'>
                <div className='recent-product__items'>
                    <div className='recent-product__item'>
                        <div className='recent-product__item-image'>
                            <img className='hero-aria__image' src={BlackIphoneSpeaker} alt="BlackIphoneSpeaker" />
                        </div>
                        <div className='recent-product__item-info'>
                            <h4 className='recent-product__item-title'>Black iPhone Speaker</h4>
                            <p className='recent-product__item-paragrapf'>The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
                            <p className='recent-product__item-price'>$249.99 <span className='recent-product__item-price-span'>$249.99</span></p>
                            <div>
                                {/* рейтинг */}
                            </div>
                        </div>
                    </div>
                    <div className='recent-product__item'>
                        <div className='recent-product__item-image'>
                            <img className='hero-aria__image' src={Beats} alt="beats" />
                        </div>
                        <div className='recent-product__item-info'>
                            <h4 className='recent-product__item-title'>Beats!</h4>
                            <p className='recent-product__item-paragrapf'>The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
                            <p className='recent-product__item-price'>$249.99 <span className='recent-product__item-price-span'>$249.99</span></p>
                            <div>
                                {/* рейтинг */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default RecentProduct