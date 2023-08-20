import React, { useRef } from 'react';

// context
import { useMainContext } from '../untils/MainContext'

//icons
import { SlArrowDown } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

//images
import bg from "../assets/img/Back-Images.png";

//fakedata
import { Fakefilm } from './../fakedata/Fakefilm';

export const Header = () => {
    const values = useMainContext();

    const submenu = useRef(null);
    const watchlist = useRef(null);

    const openSubmenu = () => {
        submenu.current.classList.toggle('block-menu');
    };
    const openWatchlist = () => {
        watchlist.current.classList.toggle('block-menu');
    };

    const openLogin = () => {
        values.setOpenSingin('block');
        values.setOpenForm('50%');
    };

    const closewatchList = () => {
        watchlist.current.classList.remove('block-menu');
    };

    const openMobileMenu = () => {
        values.setMenu('0');
        values.setMenuBg('0');
    };

    return (
        <header className='main-header'>
            <div className="header-nav">
                <div className="logo-and-nav">
                    <div className="logo">
                        <h1>LOGO</h1>
                    </div>

                    <nav>
                        <a className='menu-item' href="">Menu1
                        </a>

                        <a className='menu-item' href="">Menu2</a>

                        <div onClick={openSubmenu} className="lang">
                            AZ  <SlArrowDown />

                            <div ref={submenu} className="item-submenu">
                                <div className="langs">
                                    <a href="">EN</a>
                                    <a href="">RU</a>
                                    <a href="">TR</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="header-btns">
                    <button onClick={openWatchlist} type='button'>Watchlist</button>
                    <button type='button' onClick={openLogin}>Login</button>

                    <div ref={watchlist} className="watchlist">
                        <div onClick={closewatchList} className="close">
                            <div className="icon-close"><AiOutlineClose /></div>
                        </div>

                        <div className="liked-films">
                            {
                                Fakefilm.map(x => (
                                    <div className="liked-movie">
                                        <div className="img-liked">
                                          <img src={x.image} alt="" />
                                        </div>

                                        <div className="name-liked">{x.name}</div>

                                        <div className="close"><AiOutlineClose/></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div onClick={openMobileMenu} className="burger-menu">
                        <div className="burger-inner"><RxHamburgerMenu /></div>
                    </div>
                </div>
            </div>

            <div className="image-header">
                <img src={bg} alt="" />
            </div>
        </header>
    )
}
