import store from "../redux/store";

//общий запрос
export function ApiRequest() {

    const url = `http://localhost:4000/electronics`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_Electronics',
                payload: {
                    result: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

//запрос для добавления элемента в корзину
export function ApiRequestAddCart(id) {

    const url = `http://localhost:4000/electronics/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_ID_Electronics',
                payload: {
                    idItemCart: data
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}