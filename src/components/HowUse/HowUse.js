import React from "react";
import "./how-use.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import how_image1 from "../../images/how_image1.svg";
import how_image3 from "../../images/how_image3.svg";
import how_image5 from "../../images/how_image5.svg";

import right_image1 from "../../images/page_how_use_image1.svg";
import right_image2 from "../../images/page_how_use_image2.svg";
import right_image3 from "../../images/page_how_use_image3.svg";

import types_img1 from "../../images/types_img1.png";
import types_img2 from "../../images/types_img2.png";
import types_img3 from "../../images/types_img3.png";
import types_img4 from "../../images/types_img4.png";

import page_how_use_arrow1 from "../../images/page_how_use_arrow1.svg";
import page_how_use_arrow2 from "../../images/page_how_use_arrow2.svg";

const HowUse = () => {
    return (
        <div className="how_use_page">
            <Header />
            <div className="main_cont">
                <div className="container">
                    <div className="cont">
                        <h1 className="how_use_page_title">
                            Как пользоваться сервисом?
                        </h1>
                        <div className="how_use_page_content">
                            <div className="cards">
                                <div className="card">
                                    {/* <img
                                        src={page_how_use_arrow1}
                                        className="arrow1"
                                    /> */}
                                    <img
                                        src={how_image1}
                                        className="bottom_image"
                                    />
                                    <h1 className="card_counter">01</h1>
                                    <div className="card_cont">
                                        <h1 className="card_title">
                                            Зарегистрируйтесь
                                        </h1>
                                        <p className="card_desc">
                                            Регистрация аккаунта для доступа к
                                            каталогам и платежной системе
                                            занимает не более 5-ти минут!
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img
                                        src={how_image3}
                                        className="bottom_image2"
                                    />
                                    {/* <img
                                        src={page_how_use_arrow2}
                                        className="arrow2"
                                    /> */}
                                    <h1 className="card_counter">02</h1>
                                    <div className="card_cont">
                                        <h1 className="card_title">Играете</h1>
                                        <p className="card_desc">
                                            Регистрация аккаунта для доступа к
                                            каталогам и платежной системе
                                            занимает не более 5-ти минут!
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img
                                        src={how_image5}
                                        className="bottom_image3"
                                    />
                                    <h1 className="card_counter">03</h1>
                                    <div className="card_cont">
                                        <h1 className="card_title">
                                            Обмениваетесь
                                        </h1>
                                        <p className="card_desc">
                                            Регистрация аккаунта для доступа к
                                            каталогам и платежной системе
                                            занимает не более 5-ти минут!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="how_use_right_images">
                                <img
                                    className="how_use_right_image1"
                                    src={right_image1}
                                    alt=""
                                />
                                <img
                                    className="how_use_right_image2"
                                    src={right_image2}
                                    alt=""
                                />
                                <img
                                    className="how_use_right_image3"
                                    src={right_image3}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="types">
                <div className="container">
                    <div className="cont">
                        <div className="types_cards">
                            <div className="types_card">
                                <img src={types_img1} className="card_logo" />
                                <p>Для развития моторики</p>
                            </div>
                            <div className="types_card">
                                <img src={types_img2} className="card_logo" />
                                <p>Деревянные игрушки</p>
                            </div>
                            <div className="types_card">
                                <img src={types_img3} className="card_logo" />
                                <p>Для развития логики</p>
                            </div>
                            <div className="types_card">
                                <img src={types_img4} className="card_logo" />
                                <p>Для изучения цветов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="start_use">
                <div className="container">
                    <div className="cont">
                        <h1 className="start_use_title">
                            Новые игрушки каждый
                            <br />
                            месяц за подписку
                        </h1>
                        <div className="btns">
                            <button className="start_use_btn">
                                Начать пользоваться
                                <svg
                                    width="13"
                                    height="20"
                                    viewBox="0 0 13 20"
                                    fill="none"
                                >
                                    <path
                                        d="M12.049 9.22487C12.5399 9.62502 12.5399 10.375 12.049 10.7751L1.8818 19.0623C1.22855 19.5947 0.250001 19.1299 0.250001 18.2871L0.250002 1.71288C0.250002 0.870118 1.22855 0.405292 1.8818 0.937746L12.049 9.22487Z"
                                        fill="#75E1D2"
                                    />
                                </svg>
                            </button>
                            <p className="start_use_register_text">
                                Зарегистрируйтесь в системе
                                <br /> и выберете тариф
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HowUse;
