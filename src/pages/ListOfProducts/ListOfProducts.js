import React, { Component } from 'react';
import { ApiRequest } from '../../API/ApiRequest';
import store from '../../redux/store';
import ListOfItems from './ListOfItems/ListOfItems';

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
            <section className='populer-product'>
                <div className='populer-product__container'>
                    <div className='populer-product__header'>
                        <h2>All items</h2>
                    </div>
                    <div className='populer-product__items-block'>
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
