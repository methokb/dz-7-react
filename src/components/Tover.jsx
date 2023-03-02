import React from 'react'
import iconBrand from '../assets/Group.svg'
import iconRight1 from "../assets/Group 32 (1).svg"
import iconRight2 from '../assets/Vector 26 (Stroke) (1).svg'
import iconRight3 from '../assets/Group 31 (1).svg'

const Tover = () => {
    return (
        <div className='Header'>
            <div className="container">
                <img src={iconBrand} alt="" className='img_icon' />
                <ul className='section'>
                    <li className='section_women'>ЖЕНЩИНЫ</li>
                    <li className='section_men'>МУЖЧИНЫ</li>
                    <li className='section_search'>ПОИСК</li>
                </ul>
                <input type="text" className='input' />
                <ul className='menu_language'>
                    <li className='language_ru'>RU</li>
                    <li>UA</li>
                    <li>EN</li>
                </ul>
                <p className='icon_right'>
                    <img src={iconRight1} alt="" />
                    <img src={iconRight2} alt="" />
                    <img src={iconRight3} alt="" />
                </p>
            </div>
            <p className='line'></p>
            <div className="container2">
                <ul className='ul_con2'>
                    <li className='ul_li_con2'>Главная</li>
                    <li>Женщины</li>
                    <li>Одежды</li>
                    <li className='ul_li4_con2'>Кофты и пиджаки</li>

                </ul>
                <div className="flex">
                    <h2>ЖЕНЩИНЫ</h2>
                    <h2 className='h1_con2'>МУЖЧИНЫ</h2>
                    <h1>Кофти та піджаки</h1>
                </div>
                <p className='polos_con2'></p>
                <p className='big'></p>
            </div>
        </div>
    )
}

export default Tover