import React, { useState } from 'react'
import './Login.css'
import validator from 'validator';
import { LoginUser } from '../../API/ApiRequest';

export default function Login() {

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
        }
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
                <input className="login__form-button"
                    value={'Login'}
                    type="submit" />
            </form>
        </div>
    )
}