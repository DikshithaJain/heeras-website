import React, { useRef } from 'react'
import './PopUpServices.css'

const PopUpServices = ({popupService, setPopupService, data}) => {

    const popup = useRef(null);

    const closePopup = (e) => {
        if (e.target === popup.current) {
            setPopupService(false);
        }
    }

    return (
        <div ref={popup} className={`pop-up-service ${popupService ? '' : 'hide-service'}`} onClick={closePopup} >
            <h2>{data}</h2>
        </div>
    )
}

export default PopUpServices