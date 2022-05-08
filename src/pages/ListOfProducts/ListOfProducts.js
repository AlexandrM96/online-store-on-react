import React, { Component } from 'react';
import { ApiRequest } from '../../API/ApiRequest';
import store from '../../redux/store';
import ListOfItems from './ListOfItems/ListOfItems';
import './ListOfProducts.css'

class ListOfProducts extends Component {

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
            <section className='list-of-product'>
                <div className='list-of-product__container'>
                    <div className='list-of-product__header'>
                        <h2>The Linkedtech Items</h2>
                    </div>
                    <div className='list-of-product__items-block'>
                        {this.state.data && this.state.data.map((item) => (
                                <ListOfItems {...item}/>
                            ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default ListOfProducts
