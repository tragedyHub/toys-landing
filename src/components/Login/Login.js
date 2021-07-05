import React from "react";
import "./login.scss";
import Header from "../Header/Header";

import {NavLink} from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <Header />
      <form method="post" className="auth_form">
        <h1 className="auth_form_title">Вход</h1>
        <p className="first_login_text">
          Первый раз в TIDI?{" "}
          <NavLink to="/register" className="first_login_text_span">Зарегистрируйте</NavLink> новый
          аккаунт
        </p>
        <div className="auth_form_input_block">
          <label className="auth_form_label">Логин</label>
          <input
            className="auth_form_input"
            type="text"
            placeholder="mail@mail.ru"
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
        <button className="submit_btn">Войти</button>
        <a className="recovery_acc" href="#">Забыли пароль?</a>
      </form>
    </div>
  );
};

export default Login;
