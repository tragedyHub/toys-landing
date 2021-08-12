import React from "react";
import "./register.scss";

import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Registration = () => {
    return (
        <div className="register">
            <Header />
            <form method="post" className="auth_form">
                <h1 className="auth_form_title">Регистрация</h1>
                <p className="first_auth_text">
                    Создайте новый аккаунт, чтобы использовать полный функционал
                    сервиса
                </p>
                <div className="auth_form_input_block">
                    <label className="auth_form_label">Имя</label>
                    <input
                        className="auth_form_input"
                        type="text"
                        placeholder="Иван"
                    />
                </div>
                <div className="auth_form_input_block">
                    <label className="auth_form_label">Фамилия</label>
                    <input
                        className="auth_form_input"
                        type="text"
                        placeholder="Иванов"
                    />
                </div>
                <div className="auth_form_input_block">
                    <label className="auth_form_label">Почта</label>
                    <input
                        className="auth_form_input"
                        type="text"
                        placeholder="Иванов"
                    />
                </div>
                <div className="auth_form_input_block">
                    <label className="auth_form_label">Пароль</label>
                    <input
                        className="auth_form_input"
                        type="password"
                        placeholder="********"
                    />
                </div>
                <div className="auth_form_input_block">
                    <label className="auth_form_label">Повторите пароль</label>
                    <input
                        className="auth_form_input"
                        type="password"
                        placeholder="********"
                    />
                </div>
                <div className="auth_checkbox_row">
                    <input type="radio" className="auth_checkbox" />
                    <label htmlFor="" className="auth_checkbox_row_label">
                        Я согласен с Публичной офертой
                    </label>
                </div>
                <button className="submit_btn">Зарегистрировать аккаунт</button>
                <div className="created_block">
                    <p className="created_block_text">
                        Если у вас есть аккаунт
                    </p>
                    <NavLink to="/login">
                        <button className="submit_btn">Вход</button>
                    </NavLink>
                </div>
            </form>
            <div className="footer_trigger">
                <Footer />
            </div>
        </div>
    );
};

export default Registration;
