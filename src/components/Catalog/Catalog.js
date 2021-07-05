import React from "react";
import "./catalog.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { NavLink } from "react-router-dom";

import header_logo from "../../images/header_logo.svg";

const Catalog = () => {
  return (
    <div className="catalog_page">
      <div className="container">
        <Header />
      </div>
      <div className="catalog_marks">
        <div className="container">
          <div className="cont">
            <div className="top">
              <h1 className="top_title">Каталог</h1>
              <div className="full_catalog">
                <a href="#" className="full_catalog_link">
                  Открыть весь каталог
                </a>
                <svg width="22" height="24" viewBox="0 0 22 24" id="arrow">
                  <path
                    id="arrow_path"
                    d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                    fill="#75E1D2"
                  />
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
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row_item">
                    <div className="bottom">
                      <a href="#" className="bottom_link">
                        Популярное
                      </a>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        id="arrow"
                      >
                        <path
                          id="arrow_path"
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#75E1D2"
                        />
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
                    <input type="radio" className="row_checkbox" />
                    <label className="row_label">0-6 месяцев</label>
                  </div>
                  <div className="row">
                    <input type="radio" className="row_checkbox" />
                    <label className="row_label">6-12 месяцев</label>
                  </div>
                  <div className="row">
                    <input type="radio" className="row_checkbox" />
                    <label className="row_label">12-36 месяцев</label>
                  </div>
                  <div className="row">
                    <input type="radio" className="row_checkbox" />
                    <label className="row_label">3-5 лет</label>
                  </div>
                  <div className="row">
                    <input type="radio" className="row_checkbox" />
                    <label className="row_label">5-8 и более</label>
                  </div>
                </div>
                <div className="filter">
                  <h1 className="filter_title">Категории</h1>
                  <div className="row">
                    <input type="checkbox" className="row_checkbox" />
                    <label className="row_label">Для логики</label>
                  </div>
                  <div className="row">
                    <input type="checkbox" className="row_checkbox" />
                    <label className="row_label">Для моторики</label>
                  </div>
                  <div className="row">
                    <input type="checkbox" className="row_checkbox" />
                    <label className="row_label">Для цветов</label>
                  </div>
                  <div className="row">
                    <input type="checkbox" className="row_checkbox" />
                    <label className="row_label">Другое</label>
                  </div>
                </div>
                <div className="filter">
                  <h1 className="filter_title">Бренды</h1>
                  <div className="row">
                    <input type="checkbox" className="row_checkbox" />
                    <label className="row_label">Hasbro</label>
                  </div>
                  <div className="row">
                    <input type="checkbox" className="row_checkbox" />
                    <label className="row_label">Hasbro</label>
                  </div>
                  <div className="row">
                    <input type="checkbox" className="row_checkbox" />
                    <label className="row_label">Hasbro</label>
                  </div>
                  <div className="row">
                    <input type="checkbox" className="row_checkbox" />
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
                  <input
                    type="text"
                    className="search_input"
                    placeholder="Поиск"
                  />
                </div>
                <div className="avaliable">
                  <h1 className="avaliable_title">Доступно сейчас</h1>
                  <input type="checkbox" className="switch_1" />
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
                  <NavLink to="/catalog/item" style={{ cursor: "pointer" }}>
                    <button className="btn">Выбрать</button>
                  </NavLink>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <NavLink to="/catalog/item" style={{ cursor: "pointer" }}>
                    <button className="btn">Выбрать</button>
                  </NavLink>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <NavLink to="/catalog/item" style={{ cursor: "pointer" }}>
                    <button className="btn">Выбрать</button>
                  </NavLink>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <NavLink to="/catalog/item" style={{ cursor: "pointer" }}>
                    <button className="btn">Выбрать</button>
                  </NavLink>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <button className="btn">Выбрать</button>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <button className="btn">Выбрать</button>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <button className="btn">Выбрать</button>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <button className="btn">Выбрать</button>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <button className="btn">Выбрать</button>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <button className="btn">Выбрать</button>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <button className="btn">Выбрать</button>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </div>
                <div className="item">
                  <div className="item_image"></div>
                  <h1 className="item_name">Самолет игрушечный</h1>
                  <p className="item_brand_name">Бренд</p>
                  <p className="item_cost">18 Токенов</p>
                  <button className="btn">Выбрать</button>
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5175 0.760002C18.2206 0.760002 16.1916 1.91312 14.9791 3.67018C14.9791 3.67018 14.5697 4.28284 13.9203 4.28284C13.2715 4.28284 12.8621 3.67018 12.8621 3.67018C11.649 1.91312 9.62113 0.760002 7.32363 0.760002C3.61035 0.760002 0.600586 3.76976 0.600586 7.48421C0.600586 8.36128 0.772972 9.19584 1.07814 9.964C2.96157 15.8123 11.3852 22.6879 13.9203 22.9389C16.456 22.6879 24.8784 15.8123 26.763 9.964C27.0682 9.19642 27.2406 8.36128 27.2406 7.48421C27.2406 3.76976 24.2308 0.760002 20.5175 0.760002Z"
                      fill="#E0E0E0"
                    />
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
  );
};

export default Catalog;
