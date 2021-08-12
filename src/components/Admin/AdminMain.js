import React from "react";
import Header from "../Header/Header";
import "./admin-main.scss";
import AdminNav from "./AdminNav";

import search from "../../images/search_icon3.svg";

const AdminMain = () => {
    return (
        <div className="admin">
            <div className="main_cont">
                <div className="container">
                    <div className="cont">
                        <div className="admin_main_search">
                            <input type="text" placeholder="Поиск..." />
                            <img src={search} alt="" />
                        </div>
                        <div className="admin_main_nav_table">
                            <a className="admin_main_nav_item active" href="/">
                                Все
                            </a>
                            <a className="admin_main_nav_item" href="/">
                                Тариф 1
                            </a>
                            <a className="admin_main_nav_item" href="/">
                                Тариф 2
                            </a>
                        </div>
                        <div className="table">
                            <div className="counters">
                                <p className="counter">1</p>
                                <p className="counter">2</p>
                                <p className="counter">3</p>
                                <p className="counter">4</p>
                            </div>
                            <table className="admin_main_table">
                                <thead className="main_thead">
                                    <tr>
                                        <th>Логин</th>
                                        <th>ФИО</th>
                                        <th>Токенов</th>
                                        <th>Начало подписки</th>
                                        <th>Конец подписки</th>
                                        <th>Тариф</th>
                                    </tr>
                                </thead>
                                <tbody className="main_tbody">
                                    <tr className="main_tbody_tr">
                                        <td className="blue">
                                            bigtask2021@yandex.ru
                                        </td>
                                        <td className="blue">
                                            Рыбочкин Никита Сергеевич
                                        </td>
                                        <td>83/100</td>
                                        <td
                                            style={{ fontSize: "17px" }}
                                            className="blue"
                                        >
                                            20.02.2020
                                        </td>
                                        <td
                                            style={{ fontSize: "17px" }}
                                            className="blue"
                                        >
                                            20.02.2020
                                        </td>
                                        <td>Название</td>
                                        {/* <td><button>Приостановить</button></td>
                                    <td><button>Продлить</button></td>А
                                    <td><button>Отменить</button></td> */}
                                        <th>
                                            <a href="/" className="blue">
                                                Преостановить
                                            </a>
                                        </th>
                                        <th>
                                            <a href="/" className="blue">
                                                Продлить
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                href="/"
                                                style={{ color: "#FF3333" }}
                                            >
                                                Отменить
                                            </a>
                                        </th>
                                    </tr>
                                    <tr className="main_tbody_tr">
                                        <td className="blue">
                                            bigtask2021@yandex.ru
                                        </td>
                                        <td className="blue">
                                            Рыбочкин Никита Сергеевич
                                        </td>
                                        <td>83/100</td>
                                        <td
                                            style={{ fontSize: "17px" }}
                                            className="blue"
                                        >
                                            20.02.2020
                                        </td>
                                        <td
                                            style={{ fontSize: "17px" }}
                                            className="blue"
                                        >
                                            20.02.2020
                                        </td>
                                        <td>Название</td>
                                        {/* <td><button>Приостановить</button></td>
                                    <td><button>Продлить</button></td>А
                                    <td><button>Отменить</button></td> */}
                                        <th>
                                            <a href="/" className="blue">
                                                Преостановить
                                            </a>
                                        </th>
                                        <th>
                                            <a href="/" className="blue">
                                                Продлить
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                href="/"
                                                style={{ color: "#FF3333" }}
                                            >
                                                Отменить
                                            </a>
                                        </th>
                                    </tr>
                                    <tr className="main_tbody_tr">
                                        <td className="blue">
                                            bigtask2021@yandex.ru
                                        </td>
                                        <td className="blue">
                                            Рыбочкин Никита Сергеевич
                                        </td>
                                        <td>83/100</td>
                                        <td
                                            style={{ fontSize: "17px" }}
                                            className="blue"
                                        >
                                            20.02.2020
                                        </td>
                                        <td
                                            style={{ fontSize: "17px" }}
                                            className="blue"
                                        >
                                            20.02.2020
                                        </td>
                                        <td>Название</td>
                                        {/* <td><button>Приостановить</button></td>
                                    <td><button>Продлить</button></td>А
                                    <td><button>Отменить</button></td> */}
                                        <th>
                                            <a href="/" className="blue">
                                                Преостановить
                                            </a>
                                        </th>
                                        <th>
                                            <a href="/" className="blue">
                                                Продлить
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                href="/"
                                                style={{ color: "#FF3333" }}
                                            >
                                                Отменить
                                            </a>
                                        </th>
                                    </tr>
                                    <tr className="main_tbody_tr">
                                        <td className="blue">
                                            bigtask2021@yandex.ru
                                        </td>
                                        <td className="blue">
                                            Рыбочкин Никита Сергеевич
                                        </td>
                                        <td>83/100</td>
                                        <td
                                            style={{ fontSize: "17px" }}
                                            className="blue"
                                        >
                                            20.02.2020
                                        </td>
                                        <td
                                            style={{ fontSize: "17px" }}
                                            className="blue"
                                        >
                                            20.02.2020
                                        </td>
                                        <td>Название</td>
                                        {/* <td><button>Приостановить</button></td>
                                    <td><button>Продлить</button></td>А
                                    <td><button>Отменить</button></td> */}
                                        <th>
                                            <a href="/" className="blue">
                                                Преостановить
                                            </a>
                                        </th>
                                        <th>
                                            <a href="/" className="blue">
                                                Продлить
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                href="/"
                                                style={{ color: "#FF3333" }}
                                            >
                                                Отменить
                                            </a>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="admin_main_adaptive_table">
                            <div className="admin_main_adaptive_table_card">
                                <div className="card_number">1</div>
                                <div className="card_content">
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Логин
                                            </label>
                                            <h1 className="card_content_text">
                                                bigtask2021@yandex.ru
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Начало подписки
                                            </label>
                                            <h1 className="card_content_text">
                                                20.02.2020
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button"
                                        >
                                            Преостановить
                                        </a>
                                    </div>
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                ФИО
                                            </label>
                                            <h1 className="card_content_text">
                                                Рыбочкин Никита Сергеевич
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Конец подписки
                                            </label>
                                            <h1 className="card_content_text">
                                                20.02.2020
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button"
                                        >
                                            Продлить
                                        </a>
                                    </div>
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Токенов
                                            </label>
                                            <h1 className="card_content_text">
                                                83/100
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Тариф
                                            </label>
                                            <h1 className="card_content_text">
                                                Название
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button red"
                                        >
                                            Отменить
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="admin_main_adaptive_table_card">
                                <div className="card_number">2</div>
                                <div className="card_content">
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Логин
                                            </label>
                                            <h1 className="card_content_text">
                                                bigtask2021@yandex.ru
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Начало подписки
                                            </label>
                                            <h1 className="card_content_text">
                                                20.02.2020
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button"
                                        >
                                            Преостановить
                                        </a>
                                    </div>
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                ФИО
                                            </label>
                                            <h1 className="card_content_text">
                                                Рыбочкин Никита Сергеевич
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Конец подписки
                                            </label>
                                            <h1 className="card_content_text">
                                                20.02.2020
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button"
                                        >
                                            Продлить
                                        </a>
                                    </div>
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Токенов
                                            </label>
                                            <h1 className="card_content_text">
                                                83/100
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Тариф
                                            </label>
                                            <h1 className="card_content_text">
                                                Название
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button red"
                                        >
                                            Отменить
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="admin_main_adaptive_table_card">
                                <div className="card_number">3</div>
                                <div className="card_content">
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Логин
                                            </label>
                                            <h1 className="card_content_text">
                                                bigtask2021@yandex.ru
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Начало подписки
                                            </label>
                                            <h1 className="card_content_text">
                                                20.02.2020
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button"
                                        >
                                            Преостановить
                                        </a>
                                    </div>
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                ФИО
                                            </label>
                                            <h1 className="card_content_text">
                                                Рыбочкин Никита Сергеевич
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Конец подписки
                                            </label>
                                            <h1 className="card_content_text">
                                                20.02.2020
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button"
                                        >
                                            Продлить
                                        </a>
                                    </div>
                                    <div className="card_content_column">
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Токенов
                                            </label>
                                            <h1 className="card_content_text">
                                                83/100
                                            </h1>
                                        </div>
                                        <div className="card_content_column_item">
                                            <label className="card_content_label">
                                                Тариф
                                            </label>
                                            <h1 className="card_content_text">
                                                Название
                                            </h1>
                                        </div>
                                        <a
                                            href="/"
                                            className="card_content_button red"
                                        >
                                            Отменить
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMain;
