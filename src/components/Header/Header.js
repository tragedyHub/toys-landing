import React, {useState} from "react";
import "./header.scss";

import { NavLink } from "react-router-dom";
import rainbow_logo from "../../images/rainbow_logo.svg";

// import header_logo from "../../images/header_logo.svg";

const Header = () => {
    const [showProfile, setShowProfile] = useState(false)

    return (
        <header className="header">
            <div className="container">
                <div className="cont">
                    <svg
                        width="50"
                        height="40"
                        viewBox="0 0 50 40"
                        fill="none"
                        className="burger_menu"
                    >
                        <rect width="50" height="8" rx="4" fill="#66CCCC" />
                        <rect
                            y="16"
                            width="50"
                            height="8"
                            rx="4"
                            fill="#66CCCC"
                        />
                        <rect
                            y="32"
                            width="50"
                            height="8"
                            rx="4"
                            fill="#66CCCC"
                        />
                    </svg>

                    <div className="logo_container">
                        <img src={rainbow_logo} alt="" />
                    </div>
                    <nav className="header_menu">
                        <a className="header_menu_link">О проекте</a>
                        <a className="header_menu_link">Посмотреть игрушек</a>
                        <a className="header_menu_link">Блог</a>
                    </nav>
                    <div className="icon_menu">
                        <NavLink to="/login" style={{ marginRight: "1em" }}>
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 35 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                            >
                                <path
                                    d="M17.5 0C7.83603 0 0 7.83449 0 17.4992C0 27.164 7.83526 34.9985 17.5 34.9985C27.1655 34.9985 35 27.164 35 17.4992C35 7.83449 27.1655 0 17.5 0ZM17.5 5.23247C20.6978 5.23247 23.289 7.8245 23.289 11.0207C23.289 14.2177 20.6978 16.8089 17.5 16.8089C14.3038 16.8089 11.7125 14.2177 11.7125 11.0207C11.7125 7.8245 14.3038 5.23247 17.5 5.23247ZM17.4962 30.4232C14.3069 30.4232 11.3858 29.2617 9.13281 27.3392C8.58396 26.8711 8.26726 26.1847 8.26726 25.4644C8.26726 22.2228 10.8908 19.6285 14.1331 19.6285H20.8684C24.1115 19.6285 26.725 22.2228 26.725 25.4644C26.725 26.1854 26.4099 26.8703 25.8603 27.3385C23.608 29.2617 20.6862 30.4232 17.4962 30.4232Z"
                                    fill="#75E1D2"
                                />
                            </svg>
                        </NavLink>
                        <NavLink to="/cart">
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 35 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                            >
                                <circle
                                    cx="17.5"
                                    cy="17.5"
                                    r="17.5"
                                    fill="#75E1D2"
                                />
                                <path
                                    d="M27.5051 12.2645H27.0873L28.6296 10.722C29.1254 10.2263 29.1254 9.42309 28.6296 8.9274C28.1341 8.43161 27.3307 8.43161 26.8351 8.9274L24.4304 11.3321C24.3726 11.3268 24.3167 11.3146 24.2575 11.3146C23.5364 11.3146 22.9089 11.6956 22.5522 12.2645H12.74C12.3832 11.6956 11.7552 11.3146 11.0347 11.3146C10.9754 11.3146 10.9194 11.3268 10.8618 11.3321L8.45715 8.9274C7.96146 8.43161 7.15805 8.43161 6.66265 8.9274C6.16682 9.42309 6.16682 10.2263 6.66265 10.722L8.20483 12.2645H7.90466C6.97534 12.2645 6.22217 13.0179 6.22217 13.9467V15.1245C6.22217 16.0021 6.89713 16.7146 7.7547 16.7917L9.01723 25.1754C9.01723 26.2534 9.8913 27.1279 10.9696 27.1279H24.4401C25.5185 27.1279 26.3923 26.2534 26.3923 25.1754L27.6551 16.7917C28.5127 16.7146 29.1876 16.0021 29.1876 15.1245V13.9467C29.1878 13.0179 28.4343 12.2645 27.5051 12.2645ZM14.0205 25.1748H11.0079L10.5786 21.8795H14.0205V25.1748ZM14.0205 20.5977H10.3835L9.99281 17.302H14.0206V20.5977H14.0205ZM19.2386 25.1748H16.1869V21.8793H19.2386V25.1748ZM19.2386 20.5977H16.1869V17.3024H19.2386V20.5977ZM24.0563 25.1748H21.6491V21.8793H24.6417L24.0563 25.1748ZM24.8964 20.5977H21.6491V17.3024H25.482L24.8964 20.5977Z"
                                    fill="#fff"
                                />
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
