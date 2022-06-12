
const initialState = {
    items: [],
    newItems: [],
    cardItems: [],
    cardSum: 0,
    registration: false

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API_Electronics':
            const api = action.payload.result;
            const newItems = [...state.items, api];
            return { ...state, newItems: newItems }
        case 'ADD_ID_Electronics':
            const item = action.payload.idItemCart;
            state.cardItems.push(item);
            for (let i = 0; i < state.cardItems.length; i++) {
                state.cardItems[i]['quantity_in_the_basket'] = 1;
            }
            return { ...state, ...state.cardItems, }
        case 'CHANGING_THE_QUANTITY_OF_GOODS':
            let displayNum = action.payload.displayNum;
            const id = action.payload.itemId;
            for (let i = 0; i < state.cardItems.length; i++) {
                if (state.cardItems[i].id === id) {
                    state.cardItems[i].quantity_in_the_basket = displayNum;
                };
            };
            return { ...state, ...state.cardItems, ...state.cardItems.quantity_in_the_basket }
        case 'DELL_ITEM_CART':
            const del = action.payload.itemDelId;
            console.log(state.cardItems)
            const newCartItems = [...state.cardItems].filter(item => item.id !== del);
            return { ...state, cardItems: newCartItems, }
        case 'STATUS_USER_ACCOUNT':
            const status = action.payload.statugReg;
            return { ...state, registration: status }
        default:
            return state;
    }
}
export default reducer;

