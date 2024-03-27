import React from 'react';
import './Menu.css'

const Menu = ({header, items, active, setActive}) => {

    return (
        <div className={active ? 'menu active': 'menu'}>
            <div className="blur"></div>
            <div className="menu__content">
                <div className="menu__header">{header} </div>
                <ul>
                    {items.map(item =>

                       <li>
                            <a href={item.href}>{item.value}</a>
                            <span className='material-icons'>{item.icon}</span>
                       </li> 

                    )}
                </ul>
            </div>
        </div>
    )

}

export default Menu