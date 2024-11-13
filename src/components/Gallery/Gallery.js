import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/hero-image.jpeg'
import gallery_2 from '../../assets/gallery_2.jpeg'
import gallery_3 from '../../assets/gallery_4.jpeg'
import gallery_4 from '../../assets/gallery_3.jpeg'
import white_arrow from '../../assets/white-arrow.png'

const Gallery = ({setPopupGallery}) => {
    return (
        <div className='photos'>
            <div className='gallery'>
                <img src={gallery_1} alt='' />
                <img src={gallery_2} alt='' />
                <img src={gallery_3} alt='' />
                <img src={gallery_4} alt='' />
            </div>
            <button className='btn dark-btn' onClick={() => {setPopupGallery(true)}}>See more here <img src={white_arrow} alt='' /></button>
        </div>
    )
}

export default Gallery