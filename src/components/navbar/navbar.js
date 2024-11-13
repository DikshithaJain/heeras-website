import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import './navbar.css'
import logo from '../../assets/logo-no-background.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img className='logo' src={logo} alt='' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Services</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='photos' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
                {/* <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li> */}
                <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
            </ul>
            <img className='menu-icon' src={menu_icon} alt='' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar