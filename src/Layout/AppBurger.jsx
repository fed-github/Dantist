import { useState } from 'react'
import { React } from 'react'
import './Css/AppBurger.css'
import Menu from './Menu'

export default function AppBurger(){

    const [isOpen, setIsOpen] = useState(false);
    
    const items = [
        {value: 'Главная', href: '/main', icon:'anchor'},
        {value: 'Услуги', href: '/service', icon:'dialer_sip'},
        {value: 'Магазин', href: '/shop', icon:'api'},
        {value: 'О компании', href: '/main', icon:'android'}
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      }; 

    return(
        <div>
            <nav className='burger-menu'>
                <div className={ isOpen ? 'burger-btn active' : 'burger-btn'} onClick={toggleMenu}>
                    <span></span>
                </div>
            </nav>
            <Menu active={isOpen} setActive={setIsOpen} header={'Dantist clinic'} items={items} />
        </div>
        
    )
}
