import React, { Component } from 'react';
import './Main.css';
import HeroAria from '../../components/HeroAria/HeroAria';
import RecentProduct from '../../components/RecentProduct/RecentProduct';
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import Aboute from '../../components/Aboute/Aboute';
import PopulerProduct from '../../components/PopulerProduct/PopulerProduct';
import Shop from '../../components/Shop/Shop';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

class Main extends Component {
    render() {
        return (
            <>
                <HeroAria />
                <RecentProduct />
                <SpecialOffer />
                <Aboute />
                <PopulerProduct />
                <Shop />
                <Contact />
                <Footer />
            </>
        )
    }
}

export default Main