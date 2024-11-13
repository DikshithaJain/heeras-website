import React from 'react'
import './Programs.css'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import mens_clothing from '../../assets/Mens_clothing.png'
import raymond from '../../assets/raymond.png'
import wedding from '../../assets/wedding.jpeg'

const Programs = ({setPopupService, setPopupServiceData}) => {
    const setters = (data) => {
        setPopupService(true);
        setPopupServiceData(data)
    }
    return (
        <div className='programs'>
            <div className='program' onClick={() => {setters("Dealers of Raymond limited - A complete range of Designer attire")}}>
                <img src={raymond} alt='' />
                <div className='caption'>
                    <img src={program_icon_2} alt='' />
                    <p>Dealers of Raymond</p>
                </div>
            </div>
            <div className='program' onClick={() => {setters("An exclusive Male collection - Fabrics, Readymade Suits, Blazers, Ethnic Wear, Trousers, Shirts etc. Custom stitching undertaken.")}}>
                <img src={mens_clothing} alt='' />
                <div className='caption'>
                    <img src={program_icon_1} alt='' />
                    <p>Exclusive Male Collection</p>
                </div>
            </div>
            <div className='program' onClick={() => {setters("Wedding - Specific clothing for all Wedding occasions")}}>
                <img src={wedding} alt='' />
                <div className='caption'>
                    <img src={program_icon_3} alt='' />
                    <p>Wedding</p>
                </div>
            </div>
        </div>
    )
}

export default Programs