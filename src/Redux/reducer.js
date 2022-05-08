
const initialState = {
    items: [],
    cardItems: [],
    cardSum: 0

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API_Electronics':
            const api = action.payload.result;
            const newItems = [...state.items, api];
            return { ...state, newItems }
        case 'ADD_ID_Electronics':
            const item = action.payload.idItemCart;
            state.cardItems.push(item);
            for(let i = 0; i < state.cardItems.length; i++) {
                state.cardItems[i]['quantity_in_the_basket'] = 1;
            }
            console.log('asasasasddd',state.cardItems)
            const sum = state.cardSum += parseInt(item.price);
            return { ...state, ...state.cardItems,  }
        case 'CHANGING_THE_QUANTITY_OF_GOODS':
            const plusAndMinus = action.payload.plusMinus;
            const itemPrice = action.payload.ePrice;
            plusAndMinus === '+' ? state.cardSum += itemPrice : state.cardSum -= itemPrice;
            return { ...state, ...state.cardItems,  }
        case 'DELL_ITEM_CART':
            const del = action.payload.itemDelId;
            console.log(state.cardItems)
            const newCartItems = [...state.cardItems].filter(item => item.id !== del);
            return { ...state, cardItems: newCartItems,  }
        default:
            return state;
    }
}
export default reducer;

