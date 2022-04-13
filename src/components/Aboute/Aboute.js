import React, { Component } from 'react';
import './Aboute.css';
import GIRL from './img/Mask_Group.svg';
class Aboute extends Component {
    render() {
        return (
            <section className='aboute'>
                <div className='aboute__container'>
                    <div className='class_img'>
                        <img className='aboute__img' src={GIRL} alt='girl' />
                    </div>
                    <div className='aboute__info'>
                        <h4>Aboute product</h4>
                        <h2>About For Products</h2>
                        <div className='aboute__paragraph-block'>
                            <p className='aboute__paragraph-one'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly have suffered believable.
                            </p>
                            <p className='aboute__paragraph-two'>
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                        </div>
                        <ul className='aboute__list'>
                            <li className='aboute__list-element'>
                                There are many variations of passages of Lorem Ipsum
                            </li>
                            <li className='aboute__list-element'>
                                There are many variations of passages of Lorem  Embarrassing middle of text.
                            </li>
                            <li className='aboute__list-element'>
                                There are many variations of passages of Lorem Ipsum
                            </li>
                            <li className='aboute__list-element'>
                                There are many variations of passages.
                            </li>
                            <li className='aboute__list-element'>
                                There are many variations of passages.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Aboute