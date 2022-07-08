import React, { useState } from 'react'
import './Registration.css';
import validator from 'validator';
import { RegistrationUser } from '../../API/ApiRequest';
import store from '../../redux/store';
import { useNavigate } from 'react-router-dom';

export default function Registration() {

    const navigate = useNavigate;
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            phoneNumber: "",
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
        } else if (register.phoneNumber === '') {
            alert("You did not enter phone")
        } else if (register.password !== register.password2) {
            alert("Repeated password incorrectly")
        } else if (!validator.isStrongPassword(register.password, { minSymbols: 0 })) {
            alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            const name = register.username;
            const phone = register.phoneNumber;
            const email = register.email;
            const password = register.password;
            RegistrationUser(name, phone, email, password);
            // store.dispatch({
            //     type: 'STATUS_USER_ACCOUNT',
            //     payload: {
            //         statusReg: false
            //     }
            // })
        }
    }

    const clickButtonSignIn = event => {
        store.dispatch({
            type: 'STATUS_USER_ACCOUNT',
            payload: {
                statusReg: false
            }
        })
    }

    return (
        <div className="registration">
            <h2 className="registration__title">Registration</h2>
            <form className="registration__form" onSubmit={submitChackin}>
                <p className="registration__form-paragraph" >
                    Name
                    < input
                        className="registration__form-input"
                        type="username"
                        id="username"
                        name="username"
                        value={register.username}
                        onChange={changeInputRegister}
                    />
                </p>
                <p className="registration__form-paragraph">
                    Phone number
                    <input
                        className="registration__form-input"
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={register.phoneNumber}
                        onChange={changeInputRegister}
                        formnovalidate
                    />
                </p>
                <p className="registration__form-paragraph">
                    Email
                    <input
                        className="registration__form-input"
                        type="email"
                        id="email"
                        name="email"
                        value={register.email}
                        onChange={changeInputRegister}
                        formnovalidate
                    />
                </p>
                <p className="registration__form-paragraph">
                    Password
                    <input
                        className="registration__form-input"
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={changeInputRegister}
                    />
                </p>
                <p className="registration__form-paragraph">
                    Repeat password
                    <input
                        className="registration__form-input"
                        type="password"
                        id="password2"
                        name="password2"
                        value={register.password2}
                        onChange={changeInputRegister}
                    />
                </p>
                <input className="registration__form-button"
                    value={'Sign in'}
                    type="submit"
                />
            </form>
        </div>
    )
}