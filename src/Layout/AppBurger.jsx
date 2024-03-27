import { useState } from 'react'
import { React } from 'react'
import '../main.css'
import Menu from './Menu/Menu'

export default function AppBurger(){

    const [menuActive, setMenuActive] = useState(false)
    
    const items = [{value: 'Главная', href: '/main', icon:'anchor'},
    {value: 'Услуги', href: '/service', icon:'dialer_sip'},
    {value: 'Магазин', href: '/shop', icon:'api'},]

    return(
        <div className="app">
            <nav>
                <div className="burger-btn" onClick={()=> setMenuActive(!menuActive)}>
                    <span/>
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
            <Menu active={menuActive} setActive={setMenuActive} header={'Бургер меню'} items={items} />
        </div>
        
    )
}
