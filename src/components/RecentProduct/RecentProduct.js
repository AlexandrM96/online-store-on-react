import React, { Component } from 'react';
import './RecentProduct.css';
import store from '../../redux/store';
import RecentItem from './RecentItem';
import { ApiRequest } from '../../API/ApiRequest';
import Beats from './img/Rectangle_53.svg';
import BlackIphoneSpeaker from './img/Rectangle_39.svg';

class RecentProduct extends Component {
    state = {
        data: []
    }

    componentDidMount = () => {
        ApiRequest();
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                data: state.newItems[0]
            });
        });
    };

    render() {
        return (
            <section className='recent-product'>
                <div className='recent-product__items'>
                    {this.state.data && this.state.data.filter((item) =>
                        item.rating === '4').map((item) => (
                            <div className='recent-product__item'>
                                <RecentItem {...item} />
                            </div>
                        ))}
                </div>
            </section>
        )
    }
}

export default RecentProduct


// {/* <div className='recent-product__items'>
//                     <div className='recent-product__item'>
//                         <div className='recent-product__item-image'>
//                             <img className='hero-aria__image' src={BlackIphoneSpeaker} alt="BlackIphoneSpeaker" />
//                         </div>
//                         <div className='recent-product__item-info'>
//                             <h4 className='recent-product__item-title'>Black iPhone Speaker</h4>
//                             <p className='recent-product__item-paragrapf'>The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
//                             <p className='recent-product__item-price'>$249.99 <span className='recent-product__item-price-span'>$249.99</span></p>
//                             <div>
//                                 {/* рейтинг */}
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className='recent-product__item'>
                    //     <div className='recent-product__item-image'>
                    //         <img className='hero-aria__image' src={Beats} alt="beats" />
                    //     </div>
                    //     <div className='recent-product__item-info'>
                    //         <h4 className='recent-product__item-title'>Beats!</h4>
                    //         <p className='recent-product__item-paragrapf'>The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
                    //         <p className='recent-product__item-price'>$249.99 <span className='recent-product__item-price-span'>$249.99</span></p>
                    //         <div>
                    //             {/* рейтинг */}
                    //         </div>
                    //     </div>
                    // </div>
                // </div> */}