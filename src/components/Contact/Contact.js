import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return(
            <section className='contact'>
                <div className='contact__container'>
                    <div className='contact__information'>
                        <h5>User Contact</h5>
                        <h4>Contact Us for those interested.</h4>
                        <p>The standard chunk of Lorem Ipsum used since the<br/> is reproduced below for those interested.</p>
                    </div>
                    <div className='contact__mail-input-and-button'>
                        <form>
                        <input className='contact__mail-input' 
                        placeholder="Enter your email address"
                        name="e-mail"/>
                        <button className='contact__mail-button'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact