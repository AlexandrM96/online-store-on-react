import React, { Component } from 'react';
import './HeroAria.css';

class HeroAria extends Component {
    render() {
        return (
            <>
                <section className='hero-aria'>
                    <article className='hero-aria__article-one'>
                        <div className='hero-aria__information'>
                            <h4 className='hero-aria__title'>
                                Favorite Brands
                            </h4>
                            <p className='hero-aria__paragraph-one'>
                                <span className='hero-aria__paragraph-span'>An exciting place </span>for the whole family to shop.
                            </p>
                            <p className='hero-aria__paragraph-two'>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                            </p>
                        </div>
                        <div className='hero-aria__shop-price'>
                            <button className='hero-aria__button'>
                                SHOP NOW
                            </button>
                            <div className='hero-aria__price'>
                                $ 249.99 <span className='hero-aria__price-span'>$ 249.99</span>
                            </div>
                        </div>
                    </article>
                    <article className='hero-aria__article-two'>
                        <img className='hero-aria__image' src='img/81Z-7PzoB9L 1.svg' alt="radio" />
                    </article>
                </section>
                <section className='hero-aria'>
                    <div className='hero-aria__brands'>
                        <div className='hero-aria__brand'>
                            <img className='hero-aria__image' src='img/cl_logo4.svg' alt="brand" />
                        </div>
                        <div className='hero-aria__brand'>
                            <img className='hero-aria__image' src='img/cl_logo5.svg' alt="brand" />
                        </div>
                        <div className='hero-aria__brand'>
                            <img className='hero-aria__image' src='img/cl_logo7.svg' alt="brand" />
                        </div>
                        <div className='hero-aria__brand'>
                            <img className='hero-aria__image' src='img/cl_logo2.svg' alt="brand" />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default HeroAria