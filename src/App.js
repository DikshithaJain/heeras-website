import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
// import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import PopUp from './components/PopUp/PopUp'
import PopUpServices from './components/PopUpServices/PopUpServices'
import PopUpGallery from './components/PopUpGallery/PopUpGallery'
import Gallery from './components/Gallery/Gallery'
import PopUpFooter from './components/PopUpFooter/PopUpFooter'
import { getUrls } from './firebase'

const App = () => {

    const [popupState, setPopupState] = useState(false);
    const [popupService, setPopupService] = useState(false);
    const [popupServiceData, setPopupServiceData] = useState('Hello');
    const [popupGallery, setPopupGallery] = useState(false);
    const [popupGalleryData, setPopupGalleyData] = useState([]);
    const [popupFooter, setPopupFooter] = useState(false);
    const [popupFooterData, setPopupFooterData] = useState('Popup Footer Data');

    useEffect(() => {
        let urls = getUrls();
        setPopupGalleyData(urls);
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <div className='container'>
                <Title subTitle='Our Services' title='What We Offer'/>
                <Programs setPopupService={setPopupService} setPopupServiceData={setPopupServiceData} />
                <About setPopupState={setPopupState} />
                <Title subTitle='Gallery' title='Catalog Photos' />
                <Gallery setPopupGallery={setPopupGallery} />
                {/* <Title subTitle='Testimonials' title='What Customers Say' />
                <Testimonials /> */}
                <Title subTitle='Contact Us' title='Get In Touch' />
                <Contact />
                <Footer setPopupFooter={setPopupFooter} setPopupFooterData={setPopupFooterData} />
            </div>
            <PopUp popupState={popupState} setPopupState={setPopupState} />
            <PopUpServices popupService={popupService} setPopupService={setPopupService} data={popupServiceData} />
            <PopUpGallery popupGallery={popupGallery} setPopupGallery={setPopupGallery} popupGalleryData={popupGalleryData} />
            <PopUpFooter popupFooter={popupFooter} setPopupFooter={setPopupFooter} content={popupFooterData} />
        </div>
    )
}

export default App