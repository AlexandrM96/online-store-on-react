import React, { Component } from 'react';
import './RecentProduct.css';
// import RATING from '../../image/Rating.svg';

class RecentItem extends Component {
    state = {
        data : []
    }
    render() {
        const { img, title, price, id, rating, sale, sale_count } = this.props;
        return (
            <div className='recent-product__item'>
                <div className='recent-product__item-image'>
                    <img className='recent-product__image' src={img} alt="img" />
                </div>
                <div className='recent-product__item-info'>
                    <h4 className='recent-product__item-title'>{title}</h4>
                    <p className='recent-product__item-paragrapf'>The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
                    {/* <p className='recent-product__item-price'>$249.99 <span className='recent-product__item-price-span'>$249.99</span></p> */}
                    {sale === true ?
                        <p className='recent-product__item-price'>$ {+price - (+price * (sale_count / 100))}
                            <span className='recent-product__item-price-span'> / $ {price}</span></p>
                        :
                        <p className='recent-product__item-price'>$ {price}</p>
                    }
                    {/* рейтинг */}
                    <div className='recent-product__item-rating'> 
                        {this.state.data && Array.apply(null, { length: +rating }).map((e, i) => (
                            <div className='populer-product__rating-star' key={i}>
                                <img src='loader/Rating.svg' alt='star' />
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
        )
    }
}

export default RecentItem