import store from "../redux/store";
// import axios from 'axios';

//общий запрос
export function ApiRequest() {
    const url = `http://localhost:5000/api/item/electronics`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_Electronics',
                payload: {
                    result: data.results,
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

    const url = `http://localhost:5000/api/item/electronics/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_ID_Electronics',
                payload: {
                    idItemCart: data.result[0]
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

// пост запрос для регистрации пользователя
export async function RegistrationUser(name, phone, email, password) {

    const url = `http://localhost:5000/api/auth/register`;
    await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            number: phone,
            email: email,
            password: password
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (!data.message) {
                alert("Аккаунт создан");
            } else {
                alert(data.message);
            }
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

// пост запрос для входа по email
export async function LoginUser(email, password) {

    const url = `http://localhost:5000/api/auth/login`;
    await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (!data.message) {
                alert("Успешно!");
            } else {
                alert(data.message);
            }
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}