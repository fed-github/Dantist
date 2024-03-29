import { useState } from 'react'
import { React } from 'react'
import './AppBurger.css'
import Menu from './Menu/Menu'

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
        <div className="app">
            <nav className='burger-menu'>
                <div className={ isOpen ? 'burger-btn active' : 'burger-btn'} onClick={toggleMenu}>
                    <span></span>
                </div>
            </nav>

            <main>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at nesciunt, perspiciatis dolorem itaque excepturi accusamus labore quo nemo quod architecto dolores inventore a rem iure omnis maxime, voluptatem temporibus.
                Consequatur voluptate reprehenderit aliquid omnis autem enim molestias suscipit earum. Nostrum itaque error ut autem laboriosam temporibus. Ducimus, voluptatibus soluta quasi incidunt magni odit voluptas! Voluptatum accusamus unde cum saepe?
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at nesciunt, perspiciatis dolorem itaque excepturi accusamus labore quo nemo quod architecto dolores inventore a rem iure omnis maxime, voluptatem temporibus.
                Consequatur voluptate reprehenderit aliquid omnis autem enim molestias suscipit earum. Nostrum itaque error ut autem laboriosam temporibus. Ducimus, voluptatibus soluta quasi incidunt magni odit voluptas! Voluptatum accusamus unde cum saepe?
                </p>
            </main>
            <Menu active={isOpen} setActive={setIsOpen} header={'Бургер меню'} items={items} />
        </div>
        
    )
}
