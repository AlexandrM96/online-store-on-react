const addList = {
    type: 'ADD_API_Electronics',
    text: 'List Electronics'
}

const addCart = {
    type: 'ADD_ID_Electronics',
    text: 'Id Electronics'
}

// const addItemCart = {
//     type: 'CHANGING_THE_QUANTITY_OF_GOODS',
//     text: 'changing the quantity of goods'
// }

const delItemCart = {
    type: 'DELL_ITEM_CART',
    text: 'Dell item cart'
}

const statusReg = {
    type: 'STATUS_USER_ACCOUNT',
    text: 'status_account'
}

export function addQuantity(displayNum, itemId, plusMinus) {
    return {
        type: 'CHANGING_THE_QUANTITY_OF_GOODS',
        payload: {
            displayNum: displayNum,
            itemId: itemId,
            plusMinus: plusMinus
        }
    }
}