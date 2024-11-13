import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPopupState}) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img className='about-img' src={about_img} alt='' />
                <img className='play-icon' src={play_icon} alt='' onClick={() => {setPopupState(true)}} />
            </div>
            <div className='about-right'>
                <h3>ABOUT HEERAS</h3>
                <h2>Exclusive and unique fashion for Men</h2>
                <p>We create exclusive and unique fashion for Men’s wear at exciting prices. <br />Established Since 1985 we enjoy creating memorable experience for our customers and there loved ones. Custom tailoring is also undertaken.</p>
                <p>We are proud to be associated with brand s like <b>Raymond Limited, Siyarams, Park Avenue, Parx, Jockey, Pan America, Ramraj</b> and some more</p>
                <p>We also expertise in Uniforms for Corporates , Banks, Hospitals, Hotels, Parking companies, Construction Companies, Colleges and so on</p>
            </div>
        </div>
    )
}

export default About