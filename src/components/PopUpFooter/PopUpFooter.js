import React, { useRef } from 'react'
import './PopUpFooter.css'

const PopUpFooter = ({popupFooter, setPopupFooter, content}) => {

    const popup = useRef(null);

    const closePopup = (e) => {
        if (e.target === popup.current) {
            setPopupFooter(false);
        }
    }

    return (
        <div ref={popup} className={`pop-up-footer ${popupFooter ? '' : 'hide-footer'}`} onClick={closePopup} >
            <p>{content}</p>
        </div>
    )
}

export default PopUpFooter