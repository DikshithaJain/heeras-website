import React from 'react'
import './Footer.css'

const Footer = ({setPopupFooter, setPopupFooterData}) => {
    // const setter = (data) => {
    //     setPopupFooter(true);
    //     setPopupFooterData(data);
    // }
    
    return (
        <div className='footer'>
            <p>&copy; 2024 Heeras. All rights reserved.</p>
            {/* <ul>
                <li onClick={() => {setter("Terms of Service")}}>Terms of Service</li>
                <li onClick={() => {setter("Privacy Policy")}}>Privacy Policy</li>
            </ul> */}
        </div>
    )
}

export default Footer