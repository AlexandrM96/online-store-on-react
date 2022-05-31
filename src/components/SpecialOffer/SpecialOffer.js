import React, { Component } from 'react';
import './SpecialOffer.css';

class SpecialOffer extends Component {
    render() {
        return (
            <section className='special-offer'>
                <div className='special-offer__container'>
                    <div className='special-offer__block'>
                        <div className='special-offer__info'>
                            <p className='special-offer__par-one'>Get up to 20% off Today Only!</p>
                            <p className='special-offer__par-two'>THE 4K HDR COMPACT DRONE</p>
                            <p className='special-offer__par-three'>Show Now</p>
                        </div>
                        <div>
                            <img className='special-offer__img' src='img/pack_anafi_1.svg' alt="dron" />
                        </div>
                    </div>
                    <div className='special-offer__block'>
                        <div className='special-offer__info'>
                            <p className='special-offer__par-one'>Get up to 30% off Today Only!</p>
                            <p className='special-offer__par-two'>THE 4K HDR COMPACT Camera</p>
                            <p className='special-offer__par-three'>Show Now</p>
                        </div>
                        <div>
                            <img className='special-offer__img' src='img/463836_preview_1.svg' alt="camera" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SpecialOffer