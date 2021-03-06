import React from 'react'
import './footer.scss'
import {NavLink} from "react-router-dom"

import logo from "../../images/logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="cont">
            <div className="logo_container"><img src={logo} alt="" className="logo"/></div>
            
            <div className="column">
              <h1 className="column_title">О нас</h1>
              <NavLink to="/use" className="column_link">
                Как пользоваться
              </NavLink>
              <a href="#" className="column_link">
                Отзывы
              </a>
              <NavLink to="/blog" className="column_link">
                Блог
              </NavLink>
            </div>
            <div className="column">
              <h1 className="column_title">Используй Tidi</h1>
              <NavLink to="/catalog" className="column_link">
                Каталог
              </NavLink>
              <NavLink to="/tarifs" className="column_link">
                Тарифы
              </NavLink>
            </div>
            <div className="column">
              <h1 className="column_title">Полезная информация</h1>
              <a href="#" className="column_link">
                Соглашения
              </a>
              <a href="#" className="column_link">
                Контакты
              </a>
              <a href="#" className="column_link">
                FAQ + базе знаний
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer