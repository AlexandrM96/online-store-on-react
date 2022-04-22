import React, { Component } from 'react';
import store from '../../redux/store';

class ListItemCard extends Component {

    state = {
        statusItem: false,

    }
    render() {
        return (
            <section className='list-item-card'>
                <div className='list-item-card__container'>
                    <h1>Card</h1>
                    <div className='list-item-card__items'>
                        <div>
                            <ol className='list-item-card__items-list'>
                                <li className='list-item-card__item-list-element'>

                                </li>
                            </ol>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ListItemCard