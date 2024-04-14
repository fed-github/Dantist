import { useState } from 'react'
import { React } from 'react'
import './Css/AppBurger.css'
import Menu from './Menu'
import logo1 from '../icons/logo.jpg.avif';
import logo2 from '../icons/logo2.png';

export default function AppBurger(){

    const [isOpen, setIsOpen] = useState(false);
    const [logoVisible, setLogoVisible] = useState(true );
    const [clickCount, setClickCount] = useState(0);
    
    const items = [
        {value: 'Главная', href: '/main', icon:'anchor'},
        {value: 'Услуги', href: '/service', icon:'dialer_sip'},
        {value: 'Магазин', href: '/shop', icon:'api'},
        {value: 'О компании', href: '/main', icon:'android'}
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      }; 


    //   const handleMouseEnter = () => {
    //     setLogoVisible(false);
    //     setTimeout(() => setLogoVisible(true), 300);
    //   };
    
    //   const handleMouseLeave = () => {
    //     setLogoVisible(true);
    //   };

      const handleLogoClick = () => {
        if (clickCount === 0) { // Проверяем, был ли уже сделан клик на логотип
            setLogoVisible(false); // Скрываем логотип
            setClickCount(1); // Устанавливаем количество кликов в 1
            setTimeout(() => {
                setLogoVisible(true); // Через 300мс показываем логотип снова
            }, 300);
        }
    };

    return(
        <div>
            <nav className='burger-menu'>

                <div className={ isOpen ? 'burger-btn active' : 'burger-btn'} onClick={toggleMenu}>
                    <span></span>
                </div>

                <div className="nav_aligner">
                    <div className='title'><p>Dental clinic</p> </div>

                    <div className="logo" id="logo">

                        {logoVisible && 
                            <div 
                                id="logo1" onClick={handleLogoClick} >
                                <img src={logo1} alt="Логотип 1"/>
                            </div>}
                            
                        {!logoVisible && 
                            <div 
                                id="logo2"><img src={logo2} alt="Логотип 2"/>
                            </div>}
                    </div>
                </div>
            </nav>
            <Menu active={isOpen} setActive={setIsOpen}  items={items} />
        </div>
        // header={'Dantal clinic'}
    )
}