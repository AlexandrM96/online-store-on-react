import React, { Component } from 'react';
import './ListItemCard.css';
import store from '../../redux/store';
import { connect } from 'react-redux';
import { addQuantity } from '../../redux/action';

const mapDispatchToProps = dispatch => ({
    click: (displayNum, itemId, plusMinus) => dispatch(addQuantity(displayNum, itemId, plusMinus))
})

class CardItem extends Component {
    state = {
        displayNum: 1,
        btn: true
    }

    handleClick = (e) => {
        const plusMinus = e.target.innerText;
        if (this.state.displayNum <= 1) {
            plusMinus === '+' ?
                this.setState(prevValue => ({ displayNum: this.state.displayNum + 1 }), () => {
                    return this.props.click(this.state.displayNum, this.props.id, plusMinus)
                })
                :
                this.setState({ btn: this.state.btn === false });
        } else {
            plusMinus === '+' ?
                this.setState(prevValue => ({ displayNum: this.state.displayNum + 1 }), () => {
                    return this.props.click(this.state.displayNum, this.props.id, plusMinus)
                })
                : this.setState(prevValue => ({ displayNum: this.state.displayNum - 1 }), () => {
                    return this.props.click(this.state.displayNum, this.props.id, plusMinus)
                })
        };
    };

    delItemClick = (e) => {
        console.log(e)
        const itemDel = this.props.id;
        console.log(this.props);
        store.dispatch({
            type: 'DELL_ITEM_CART',
            payload: {
                itemDelId: itemDel
            }
        })
    }

    render() {
        const { img, name, price, quantity_in_the_basket } = this.props;
        return (
            <div>
                <hr></hr>
                <div className='list-item-card__item-list-element'>
                    <div>
                        <img className='list-item-card__item-img' src={img} alt='img' />
                    </div>
                    <div className='list-item-card__item-title'>
                        {name}
                    </div>
                    <div className='list-item-card__item-buttons'>
                        <button onClick={this.handleClick}>+</button>
                        <div>
                            {quantity_in_the_basket}
                        </div>
                        <button onClick={this.handleClick}>-</button>
                    </div>
                    <div className='list-item-card__item-price'>
                        {price * quantity_in_the_basket} $
                    </div>
                    <div className='list-item-card__item-buttons'>
                        <button onClick={this.delItemClick} className='list-item-card__button-X'>X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CardItem)