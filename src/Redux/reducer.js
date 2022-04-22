const initialState = {
    items: []

}

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_API_Electronics':
            const api = action.payload.result;
            const newItems = [...state.items, api];
            return { ...state, newItems }
        default:
            return state;
    }
}
export default reducer;