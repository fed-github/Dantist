import {React, useEffect} from 'react';
import './Menu.css'

const Menu = ({header, items, active, setActive}) => {
    
    useEffect(() => {
        if (active) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [active]);
      
    return (
       <> 
        <div className={active ? 'blur': ''}></div>
        <div className={active ? 'menu active': 'menu'} onClick={()=>setActive(false)}>
            
            <div className="menu__content" onClick={(e)=> e.stopPropagation()}>
                <div className="menu__header">{header} </div>
                <ul>
                    {items.map(item =>

                       <li>
                            <a href={item.href}>{item.value}</a>
                            {/* <span className='material-icons'>{item.icon}</span> */}
                       </li> 

                    )}
                </ul>
            </div>
        </div>
        </>
    )

}

export default Menu