import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer__container'>
                    <div className='footer__logo-block'>
                        <div className='footer_column_logo'>
                            <img src='logo/Group_165.svg' alt='logo' />
                        </div>
                        <p>STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.</p>
                    </div>
                    {/* <div className='footer__columns'> */}
                        <div className='footer__column'>
                            <h6>INFORMATION</h6>
                            <p>New Collection</p>
                            <p>About Store</p>
                            <p>Contact Us</p>
                            <p>Latest News</p>
                            <p>Our Sitemap</p>
                            <p>Orders History</p>
                        </div>
                        <div className='footer__column'>
                            <h6>FOOTER MENU</h6>
                            <p>Instagram profile</p>
                            <p>New Collection</p>
                            <p>Contact Us</p>
                            <p>Latest News</p>
                            <p>Terms &amp; Conditions</p>
                            <p>Purchase Theme</p>
                        </div>
                        <div className='footer__column'>
                            <h6>USEFUL LINKS</h6>
                            <p>Instagram profile</p>
                            <p>New Collection</p>
                            <p>Contact Us</p>
                            <p>Latest News</p>
                            <p>Terms &amp; Conditions</p>
                            <p>Purchase Theme</p>
                        </div>
                        <div className='footer__column'>
                            <h6>ABOUT THE STORE</h6>
                            <p>STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.</p>
                            <a href='www.company.com' className='footer__column-adres'>www.company.com</a>
                            <div className='footer_social'>
                                <div>
                                    <a href="https://www.facebook.com/"
                                        className='footer_links'>
                                        <img className='footer_img_logo' src='social-network_logo/Vector.svg' alt='facebook' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/"
                                        className='footer_links'>
                                        <img src='social-network_logo/Group_81.svg' alt='instagram' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.twitter.com/"
                                        className='footer_links'>
                                        <img src='social-network_logo/Vector_(1).svg' alt='twitter' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.in.com/"
                                        className='footer_links'>
                                        <img src='social-network_logo/Group_82.svg' alt='in' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.youtube.com/"
                                        className='footer_links'>
                                        <img src='social-network_logo/Group_80.svg' alt='youtube' />
                                    </a>
                                </div>
                            </div>
                            <div className='footer__select-container'>
                                <div>
                                    <img src='logo/Group_73.svg' alt="lang" />
                                </div>
                                <select className='footer__select-option'>
                                    <option>English</option>
                                    <option>Russian</option>
                                </select>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </footer>
        )
    }
}

export default Footer