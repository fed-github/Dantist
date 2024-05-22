import { React, useEffect } from "react";
import "./BurgerMenu.css";

const BurgerMenu = ({ active, setActive, toggleMenu }) => {

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  const links = document.querySelectorAll(".menu__content ul li a");
  const items = [
    {value: 'Главная', href: '/#блок0', icon:'anchor'},
    {value: 'Услуги', href: '/#блок1', icon:'dialer_sip'},
    {value: 'О клинике', href: '/#блок2', icon:'api'},
    {value: 'Адрес', href: '/#блок3', icon:'android'}
  ]

  links.forEach((link) => {
    link.addEventListener("click", () => {
      window.scrollTo({
        top: '80px',
        behavior: "smooth",
      });
    });
  });

  return (
    <>
      <div className={active ? "blur" : ""}></div>
      <div
        className={active ? "menu active" : "menu"}
        onClick={() => setActive(false)}
      >
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          {/* <div className="menu__header">{header}</div> */}
          <ul>
            {items.map(
              (
                item,
                index 
              ) => (
                <li key={index}>
                  {" "}
                  {/* Add key with index */}
                  <a href={item.href} onClick={() => toggleMenu()}>
                    {item.value}
                  </a>
                  {/* <span className='material-icons'>{item.icon}</span> */}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
