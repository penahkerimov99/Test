import React, { useRef } from 'react';
import { useMainContext } from '../untils/MainContext';

//icons
import { AiOutlineClose } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";

export const MobileMenu = () => {
  const values = useMainContext();

  const closeMenu = () => {
    values.setMenu('-100%');
    values.setMenuBg('-100%');
  };

  const lang = useRef(null);

  const openLang = ()=>{
    lang.current.classList.toggle('block-submenu');
  };

  return (
    <>
      <div onClick={closeMenu} style={{ "left": values.menuBg }} className="bg-menu"></div>

      <div style={{ "left": values.menu }} className="mobile-menu">
        <div className="menu-inner">
          <div onClick={closeMenu} className="close"><AiOutlineClose /></div>
          <div className='logo'>LOGO</div>

          <div className="menu-items">
            <a href="">Menu1</a>
            <a href="">Menu2</a>
          </div>

          <div className="language-mobile">
            <div onClick={openLang} className="lang-inner">
              AZ <SlArrowDown />

              <div ref={lang} className="lang-submenu">
                <div className="lang-sub-inner">
                  <a href="">RU</a>
                  <a href="">EN</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
