import React, { useRef } from 'react'
import './PopUp.css'
import image from '../../assets/about-popup.jpeg'

const PopUp = ({popupState, setPopupState}) => {

    const popup = useRef(null);

    const closePopup = (e) => {
        if (e.target === popup.current) {
            setPopupState(false);
        }
    }

    return (
        <div ref={popup} className={`pop-up ${popupState ? '' : 'hide'}`} onClick={closePopup} >
            <img src={image} alt='' />
        </div>
    )
}

export default PopUp