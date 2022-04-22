import store from "../redux/store";

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
