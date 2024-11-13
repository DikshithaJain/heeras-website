import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Welcome to Heeras!</h1>
                <p>We at Heeras love to Dress you up for every walk of life. <br />As we believe every day is a special occasion and a new beginning .</p>
                {/* <button className='btn'>Explore more <img src={dark_arrow} alt='' /></button> */}
            </div>
        </div>
    )
}

export default Hero