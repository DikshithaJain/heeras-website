import React, { useRef } from 'react'
import './PopUpGallery.css'

const PopUpGallery = ({popupGallery, setPopupGallery, popupGalleryData}) => {

    const popup = useRef(null);

    const closePopup = (e) => {
        if (e.target === popup.current) {
            setPopupGallery(false);
        }
    }

    return (
        <div ref={popup} className={`pop-up-gallery ${popupGallery ? '' : 'hide-gallery'}`} onClick={closePopup} >
            {
            popupGalleryData ? popupGalleryData.map(imageUrl =>
                <img key ={imageUrl} src={imageUrl} alt='' />) : <></>
            }
        </div>
    )
}

export default PopUpGallery