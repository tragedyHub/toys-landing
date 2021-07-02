import React from 'react'
import "./catalog.scss"
import Footer from "../Footer/Footer"

import header_logo from "../../images/header_logo.svg";

const Catalog = () => {
    return (
        <div className='catalog_page'>
            <div className="container">
            <header className="header">
              <div className="logo">
                <img src={header_logo} className="logo__img" alt="/"/>
                <a href="/" className="logo__link">
                  LogoType
                </a>
              </div>
              <nav className="header_menu">
                <a href="/" className="header_menu_link">О проекте</a>
                <a href="/" className="header_menu_link">Посмотреть игрушек</a>
                <a href="/" className="header_menu_link">Блог</a>
              </nav>
              <div className="icon_menu">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 0C7.83603 0 0 7.83449 0 17.4992C0 27.164 7.83526 34.9985 17.5 34.9985C27.1655 34.9985 35 27.164 35 17.4992C35 7.83449 27.1655 0 17.5 0ZM17.5 5.23247C20.6978 5.23247 23.289 7.8245 23.289 11.0207C23.289 14.2177 20.6978 16.8089 17.5 16.8089C14.3038 16.8089 11.7125 14.2177 11.7125 11.0207C11.7125 7.8245 14.3038 5.23247 17.5 5.23247ZM17.4962 30.4232C14.3069 30.4232 11.3858 29.2617 9.13281 27.3392C8.58396 26.8711 8.26726 26.1847 8.26726 25.4644C8.26726 22.2228 10.8908 19.6285 14.1331 19.6285H20.8684C24.1115 19.6285 26.725 22.2228 26.725 25.4644C26.725 26.1854 26.4099 26.8703 25.8603 27.3385C23.608 29.2617 20.6862 30.4232 17.4962 30.4232Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                  <path
                    d="M27.5051 12.2645H27.0873L28.6296 10.722C29.1254 10.2263 29.1254 9.42309 28.6296 8.9274C28.1341 8.43161 27.3307 8.43161 26.8351 8.9274L24.4304 11.3321C24.3726 11.3268 24.3167 11.3146 24.2575 11.3146C23.5364 11.3146 22.9089 11.6956 22.5522 12.2645H12.74C12.3832 11.6956 11.7552 11.3146 11.0347 11.3146C10.9754 11.3146 10.9194 11.3268 10.8618 11.3321L8.45715 8.9274C7.96146 8.43161 7.15805 8.43161 6.66265 8.9274C6.16682 9.42309 6.16682 10.2263 6.66265 10.722L8.20483 12.2645H7.90466C6.97534 12.2645 6.22217 13.0179 6.22217 13.9467V15.1245C6.22217 16.0021 6.89713 16.7146 7.7547 16.7917L9.01723 25.1754C9.01723 26.2534 9.8913 27.1279 10.9696 27.1279H24.4401C25.5185 27.1279 26.3923 26.2534 26.3923 25.1754L27.6551 16.7917C28.5127 16.7146 29.1876 16.0021 29.1876 15.1245V13.9467C29.1878 13.0179 28.4343 12.2645 27.5051 12.2645ZM14.0205 25.1748H11.0079L10.5786 21.8795H14.0205V25.1748ZM14.0205 20.5977H10.3835L9.99281 17.302H14.0206V20.5977H14.0205ZM19.2386 25.1748H16.1869V21.8793H19.2386V25.1748ZM19.2386 20.5977H16.1869V17.3024H19.2386V20.5977ZM24.0563 25.1748H21.6491V21.8793H24.6417L24.0563 25.1748ZM24.8964 20.5977H21.6491V17.3024H25.482L24.8964 20.5977Z"
                    fill="#75E1D2"
                  />
                </svg>
              </div>
            </header>
            </div>
            <div className="catalog_marks">

                <div className="container">
                    <div className="cont">
                        <div className="top">
                            <h1 className="top_title">Каталог</h1>
                            <div className="full_catalog">
                                <a href="#" className="full_catalog_link">Открыть весь каталог</a>
                                <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                    <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                </svg>
                            </div>
                        </div>
                        <div className="list">
                            <div className="first_mark">
                                <div className="mark_titles">
                                    <span className="mark_span">01</span>
                                    <p className="mark_title">Выберете возраст ребенка</p>
                                </div>
                                <div className="row">
                                    <div className="row_item">
                                        <p className="row_item_text">0-6 месяцев</p>
                                    </div>
                                    <div className="row_item">
                                        <p className="row_item_text">6-12 месяцев</p>
                                    </div>
                                    <div className="row_item">
                                        <p className="row_item_text">12-36 месяцев</p>
                                    </div>
                                    <div className="row_item">
                                        <p className="row_item_text">3-5 лет</p>
                                    </div>
                                    <div className="row_item">
                                        <p className="row_item_text">5-8 и более</p>
                                    </div>
                                </div>
                            </div>
                            <div className="second_mark">
                                <div className="mark_titles">
                                    <span className="mark_span">02</span>
                                    <p className="mark_title">Выберете категорию игрушек</p>
                                </div>
                                <div className="row">
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row_item">
                                        <div className="bottom">
                                            <a href="#" className="bottom_link">Популярное</a>
                                            <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                                                <path id="arrow_path" d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z" fill="#75E1D2"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="catalog_items">
                <div className="container">
                    <div className="cont">
                        <div className="filters">
                            <div className="filters_cont">
                            <div className="filter">
                                <h1 className="filter_title">Возраст</h1>
                                <div className="row">
                                    <input type="radio" className="row_checkbox"/>
                                    <label className="row_label">0-6 месяцев</label>
                                </div>
                                <div className="row">
                                    <input type="radio" className="row_checkbox"/>
                                    <label className="row_label">6-12 месяцев</label>
                                </div>
                                <div className="row">
                                    <input type="radio" className="row_checkbox"/>
                                    <label className="row_label">12-36 месяцев</label>
                                </div>
                                <div className="row">
                                    <input type="radio" className="row_checkbox"/>
                                    <label className="row_label">3-5 лет</label>
                                </div>
                                <div className="row">
                                    <input type="radio" className="row_checkbox"/>
                                    <label className="row_label">5-8 и более</label>
                                </div>
                            </div>
                            <div className="filter">
                                <h1 className="filter_title">Категории</h1>
                                <div className="row">
                                    <input type="checkbox" className="row_checkbox"/>
                                    <label className="row_label">Для логики</label>
                                </div>
                                <div className="row">
                                    <input type="checkbox" className="row_checkbox"/>
                                    <label className="row_label">Для моторики</label>
                                </div>
                                <div className="row">
                                    <input type="checkbox" className="row_checkbox"/>
                                    <label className="row_label">Для цветов</label>
                                </div>
                                <div className="row">
                                    <input type="checkbox" className="row_checkbox"/>
                                    <label className="row_label">Другое</label>
                                </div>
                            </div>
                            <div className="filter">
                                <h1 className="filter_title">Бренды</h1>
                                <div className="row">
                                    <input type="checkbox" className="row_checkbox"/>
                                    <label className="row_label">Hasbro</label>
                                </div>
                                <div className="row">
                                    <input type="checkbox" className="row_checkbox"/>
                                    <label className="row_label">Hasbro</label>
                                </div>
                                <div className="row">
                                    <input type="checkbox" className="row_checkbox"/>
                                    <label className="row_label">Hasbro</label>
                                </div>
                                <div className="row">
                                    <input type="checkbox" className="row_checkbox"/>
                                    <label className="row_label">Hasbro</label>
                                </div>
                                
                            </div>
                            <button className="btn">Применить</button>
                            </div>
                            <p className="results">857 результатов</p>
                        </div>
                        <div className="positions">
                            <div className="help_row">
                                <div className="search">
                                    <input type="text" className="search_input" placeholder="Поиск"/>                
                                </div>
                                <div className="avaliable">
                                    <h1 className="avaliable_title">Доступно сейчас</h1>
                                    <input type="checkbox" className="switch_1"/>
                                </div>
                                <select name="cost" id="cost">
                                    <option value="title">По возрастанию цены</option>
                                    <option value="123">123</option>
                                    <option value="123">123</option>
                                </select>
                            </div>
                            <div className="items">
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                                <div className="item">
                                    <div className="item_image"></div>
                                    <h1 className="item_name">Самолет игрушечный</h1>
                                    <p className="item_brand_name">Бренд</p>
                                    <p className="item_cost">18 Токенов</p>
                                    <button className="btn">Выбрать</button>
                                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z" fill="#E0E0E0"/>
</svg>
                                </div>
                            </div>
                            <div className="slider">
                                <div className="slider_point">1</div>
                                <div className="slider_point">2</div>
                                <div className="slider_point">3</div>
                                <div className="slider_point">4</div>
                                <div className="slider_point slider_dots">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Catalog