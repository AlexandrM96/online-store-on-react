import React, { useState } from 'react'
import './Login.css'
import validator from 'validator';
import { LoginUser } from '../../API/ApiRequest';
import { useNavigate, useHistory } from "react-router-dom";
import store from '../../redux/store';

export default function Login() {

    const navigate = useNavigate();

    // const history = useHistory();

    const [register, setRegister] = useState(() => {
        return {
            email: "",
            password: "",
            password2: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitChackin = event => {
        event.preventDefault();
        if (!validator.isEmail(register.email)) {
            alert("You did not enter email")
        } else if (!validator.isStrongPassword(register.password, { minSymbols: 0 })) {
            alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            const email = register.email;
            const password = register.password;
            LoginUser(email, password);
            navigate("/profile");
            // history.push('/profile');
        }
    }

    const clickButtonSignIn = event => {
        event.preventDefault();
        store.dispatch({
            type: 'STATUS_USER_ACCOUNT',
            payload: {
                statusReg: true
            }
        })
    }

    return (
        <div className="login">
            <h2 className="login__title">Login:</h2>
            <form className="login__form" onSubmit={submitChackin}>
                <p className="login__form-paragraph">
                    Email:
                    <input
                        className="login__form-input"
                        type="email"
                        id="email"
                        name="email"
                        value={register.email}
                        onChange={changeInputRegister}
                        formnovalidate
                    />
                </p>
                <p className="login__form-paragraph">
                    Password:
                    <input
                        className="login__form-input"
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={changeInputRegister}
                    />
                </p>
                <div className='login__form-buttons'>
                    <input className="login__form-button"
                        value={'Login'}
                        type="submit" />
                    <button
                        className="login__form-button"
                        onClick={clickButtonSignIn}
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}