import React, { Component } from 'react';
import './ListItemCard.css';
import store from '../../redux/store';

class CardItem extends Component {
    state = {
        displayNum: 1,
        btn: true,
        ePrice: +this.props.price
    }

    handleClick = (e) => {
        const plusMinus = e.target.innerText;
        const price = parseInt(this.props.price);
        if (this.state.displayNum === 1) {
            plusMinus === '+' ? this.setState({ displayNum: this.state.displayNum + 1 })
                : this.setState({ btn: this.state.btn === false });
            plusMinus === '+' ? this.setState({ ePrice: +this.state.ePrice + price }) : this.setState({ btn: this.state.btn === false });
            if (plusMinus === '+') {
                store.dispatch({
                    type: 'CHANGING_THE_QUANTITY_OF_GOODS',
                    payload: {
                        ePrice: price,
                        plusMinus: plusMinus
                    }
                })
            }
        } else {
            plusMinus === '+' ? this.setState({ displayNum: this.state.displayNum + 1 })
                : this.setState({ displayNum: this.state.displayNum - 1 });
            plusMinus === '+' ? this.setState({ ePrice: +this.state.ePrice + price }) : this.setState({ ePrice: +this.state.ePrice - price });
            store.dispatch({
                type: 'CHANGING_THE_QUANTITY_OF_GOODS',
                payload: {
                    ePrice: price,
                    plusMinus: plusMinus
                }
            })
        };
    };

    delItemClick = (e) => {
        console.log(e)
        const itemDel = this.props.id;
        store.dispatch({
            type: 'DELL_ITEM_CART',
            payload: {
                itemDelId: itemDel
            }
        })
    }

    render() {
        const { img, name } = this.props;
        return (
            <div>
                <hr></hr>
                <div className='list-item-card__item-list-element'>
                    <div>
                        <img className='list-item-card__item-img' src={img} alt='img' />
                    </div>
                    <div className='list-item-card__item-title'>{name}</div>
                    <div className='list-item-card__item-buttons'>
                        <button onClick={this.handleClick}>+</button>
                        <div>{this.state.displayNum}</div>
                        <button onClick={this.handleClick}>-</button>
                    </div>
                    <div className='list-item-card__item-price'>{this.state.ePrice} $</div>
                    <div className='list-item-card__item-buttons'>
                        <button onClick={this.delItemClick} className='list-item-card__button-X'>X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardItem