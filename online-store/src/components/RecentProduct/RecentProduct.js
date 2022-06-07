import React, { Component } from 'react';
import './RecentProduct.css';
import RecentItem from './RecentItem';
import { ApiRequest } from '../../API/ApiRequest';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.newItems[0]
    };
};

class RecentProduct extends Component {

    componentDidMount = () => {
        ApiRequest();
    }

    render() {
        return (
            <section className='recent-product'>
                <div className='recent-product__items'>
                    {this.props.data && this.props.data.filter((item) =>
                        item.rating === '4').map((item) => (
                            <div className='recent-product__item'>
                                <div key={item.id}>
                                    <RecentItem {...item} />
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps)(RecentProduct);
