import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import load from '../../image/loading_89372.svg';

const Contact = () => {

    const [state, setState] = useState({ loadingIcon: false });
    const loadingStatus = state.loadingIcon;
    const form = useRef();
    const publicKey = 'DtHrmWck2f8AoAXTq';
    const templayeId = 'template_0tlk5lh';
    const serviceId = 'service_f1jkwqf';

    const sendEmail = (e) => {
        setState({ loadingIcon: true });
        e.preventDefault();
        emailjs.sendForm(serviceId, templayeId, form.current, publicKey)
            .then((result) => {
                console.log(result.text)
                setState({ loadingIcon: false });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className='contact'>
            <div className='contact__container'>
                <div className='contact__information'>
                    <h5>User Contact</h5>
                    <h4>Contact Us for those interested.</h4>
                    <p>The standard chunk of Lorem Ipsum used since the<br /> is reproduced below for those interested.</p>
                </div>
                <div className='contact__mail-input-and-button'>
                    <form className='contact__mail-form' ref={form} onSubmit={sendEmail}>
                        <input className='contact__mail-input'
                            placeholder="Enter your email address"
                            name="eMail" />
                        <button className='contact__mail-button'>Subscribe</button>
                        <div className={loadingStatus === false ? 'contact__mail-img-none' : 'contact__mail-img'}>
                            <img src={load} alt='load' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;