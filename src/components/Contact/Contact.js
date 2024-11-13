import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a5d8e00b-fddb-4027-a0e8-ba2f7965b84d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt='' /></h3>
                <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our heeras community.</p>
                <ul>
                    <li><img src={mail_icon} alt='' />heeras.raymond@gmail.com</li>
                    <li><img src={phone_icon} alt='' />
                        <ul>
                            <li>9844811726</li>
                            <li>9066490961</li>
                            <li>7829724782</li>
                            <li>08041672782</li>
                        </ul>
                    </li>
                    <li><img src={location_icon} alt='' />
                    #604/18, 62 cross 5th block near Bhashyam circle.<br />Rajajinagar, Bangalore 560010</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label>Phone number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your message here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button className='btn dark-btn' type='submit'>Submit now <img src={white_arrow} alt='' /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact