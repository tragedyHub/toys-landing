import React from "react";
import "./order.scss";
import "../Login/login.scss";



import Header from "../Header/Header";

const Order = () => {
  return (
    <div className="order_page">
      <Header />
      <form method="post" className="order_form">
        <h1 className="auth_form_title" style={{color: "#333"}}>Оформление заказа</h1>
        <p className="first_login_text" style={{color: "#828282"}}>Покупатель</p>
        <div className="auth_form_input_block">
          <label className="auth_form_label">ФИО</label>
          <input
            className="auth_form_input"
            type="text"
            placeholder="Иванов Иван Иванович"
          />
        </div>
        <div className="auth_form_input_block">
          <label className="auth_form_label">Email(для получения чека)</label>
          <input
            className="auth_form_input"
            type="password"
            placeholder="mail@mail.ru"
          />
        </div>
        <div className="auth_form_input_block">
          <label className="auth_form_label">Телефон</label>
          <input
            className="auth_form_input"
            type="tel"
            placeholder="+7"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
        <div className="auth_form_input_block">
          <label className="auth_form_label">Город доставки</label>
          <input
            className="auth_form_input"
            type="text"
            placeholder="Город доставки"
          />
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="auth_form_input_arrow"
          >
            <path
              d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11L10.5 12L13.5 12L13.5 11L10.5 11Z"
              fill="#BB6BD9"
            />
          </svg>
        </div>
        <div className="auth_form_input_block">
          <label className="auth_form_label">Адрес доставки</label>
          <input
            className="auth_form_input adress"
            type="text"
            placeholder="Ваш адрес"
          />
        </div>
        <div className="order_row">
            <p className="order_item_cost">-1000 руб.</p>
            <button className="submit_btn order_btn">Оплатить</button>
        </div>
      </form>
    </div>
  );
};

export default Order;
