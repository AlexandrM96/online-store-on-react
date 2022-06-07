
import './Main.css';
import HeroAria from '../../components/HeroAria/HeroAria';
import RecentProduct from '../../components/RecentProduct/RecentProduct';
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import Aboute from '../../components/Aboute/Aboute';
import PopulerProduct from '../../components/PopulerProduct/PopulerProduct';
import Shop from '../../components/Shop/Shop';
import Contact from '../../components/Contact/Contact';

function Main() {
    return (
        <>
            <HeroAria />
            <RecentProduct />
            <SpecialOffer />
            <Aboute />
            <PopulerProduct />
            <Shop />
            <Contact />
        </>
    )
}

export default Main