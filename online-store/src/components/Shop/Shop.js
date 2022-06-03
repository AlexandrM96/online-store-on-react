import React, { Component } from 'react';
import './Shop.css';
import { ApiRequest } from '../../API/ApiRequest';
import ShopItems from './ShopItems/ShopItems';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.newItems[0]
    };
};

class Shop extends Component {

    render() {
        ApiRequest();
        return (
            <section className='shop'>
                <div className='shop__container'>
                    <div className='shop__info'>
                        <h6>New shop</h6>
                        <h3>An enormous storehouse of facts</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is <br /> reproduced below for those interested.</p>
                    </div>
                    <div className='shop__items'>
                        {this.props.data && this.props.data.filter((item) =>
                            item.id >= 16).map((item) => (
                                <div key={item.id}>
                                    <ShopItems {...item} />
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps)(Shop);
