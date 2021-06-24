import React from "react";
import "./home.scss";
import main_cont_image from "../../images/main_cont.png";
import creator_logo from "../../images/creator_logo.png";
import truck from "../../images/truck.png";
import arrow from "../../images/truck_arrow.png";
import header_logo from "../../images/header_logo.svg";
import tips_img1 from "../../images/tips_img1.svg";
import tips_img2 from "../../images/tips_img2.svg";
import tips_img3 from "../../images/tips_img3.svg";
import types_img1 from "../../images/types_img1.png";
import types_img2 from "../../images/types_img2.png";
import types_img3 from "../../images/types_img3.png";
import types_img4 from "../../images/types_img4.png";
import how_image1 from "../../images/how_image1.svg";
import how_image2 from "../../images/how_image2.png";
import how_image3 from "../../images/how_image3.svg";
import how_image4 from "../../images/how_image4.png";
import how_image5 from "../../images/how_image5.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="main_cont">
        <div className="container">
          <div className="cont">
            <header className="header">
              <div className="logo">
                <img src={header_logo} className="logo__img" />
                <a href="" className="logo__link">
                  LogoType
                </a>
              </div>
              <nav className="header_menu">
                <a className="header_menu_link">О проекте</a>
                <a className="header_menu_link">Посмотреть игрушек</a>
                <a className="header_menu_link">Блог</a>
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
            <div className="offer">
              <img src={main_cont_image} className="image" />
              <h1 className="offer_title">
                Новые игрушки каждый
                <br />
                месяц за подписку
              </h1>
              <div className="btns">
                <button className="offer_btn">
                  Начать пользоваться
                  <svg width="13" height="20" viewBox="0 0 13 20" fill="none">
                    <path
                      d="M12.049 9.22487C12.5399 9.62502 12.5399 10.375 12.049 10.7751L1.8818 19.0623C1.22855 19.5947 0.250001 19.1299 0.250001 18.2871L0.250002 1.71288C0.250002 0.870118 1.22855 0.405292 1.8818 0.937746L12.049 9.22487Z"
                      fill="#75E1D2"
                    />
                  </svg>
                </button>
                <p className="offer_register_text">
                  Зарегистрируйтесь в системе
                  <br /> и выберете тариф
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="how_use">
        <div className="container">
          <div className="cont">
            <h1 className="how_use_title">Как пользоваться сервисом?</h1>
            <div className="cards">
              <div className="card">
                <img src={how_image2} className="arrow1"/>
                <img src={how_image1} className="bottom_image"/>
                <h1 className="card_counter">01</h1>
                <div className="card_cont">
                  <h1 className="card_title">Зарегистрируйтесь</h1>
                  <p className="card_desc">
                    Регистрация аккаунта для доступа к каталогам и платежной
                    системе занимает не более 5-ти минут!
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={how_image3} className="bottom_image2"/>
                <img src={how_image4} className="arrow2"/>
                <h1 className="card_counter">02</h1>
                <div className="card_cont">
                  <h1 className="card_title">Выберете тариф</h1>
                  <p className="card_desc">
                    Регистрация аккаунта для доступа к каталогам и платежной
                    системе занимает не более 5-ти минут!
                  </p>
                </div>
              </div>
              <div className="card">
              <img src={how_image5} className="bottom_image3"/>
                <h1 className="card_counter">03</h1>
                <div className="card_cont">
                  <h1 className="card_title">Меняйте баллы на игрушки</h1>
                  <p className="card_desc">
                    Регистрация аккаунта для доступа к каталогам и платежной
                    системе занимает не более 5-ти минут!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="types">
        <div className="container">
          <div className="cont">
            <h1 className="creators_title">Виды игрушек</h1>
            <div className="cards">
              <div className="card">
                <img src={types_img1} className="card_logo" />
                <p>Для развития моторики</p>
              </div>
              <div className="card">
                <img src={types_img2} className="card_logo" />
                <p>Деревянные игрушки</p>
              </div>
              <div className="card">
                <img src={types_img3} className="card_logo" />
                <p>Для развития логики</p>
              </div>
              <div className="card">
                <img src={types_img4} className="card_logo" />
                <p>Для изучения цветов</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tips">
        <div className="container">
          <div className="cont">
            <div className="cards">
              <div className="card">
                <img src={tips_img1} className="card_img" />
                <h1 className="card_title">Разумное потребление</h1>
                <p className="card_description">
                  Ребенок потребляет разумно. Происходит обмен вместо покупки
                  новых и хранения старых
                </p>
              </div>
              <div className="card">
                <img src={tips_img2} className="card_img" />
                <h1 className="card_title">Экология</h1>
                <p className="card_description">
                  Сохраняем окружающую среду от пластика и лишних отходов в
                  несколько раз.
                </p>
              </div>
              <div className="card">
                <img src={tips_img3} className="card_img" />
                <h1 className="card_title">Задачи</h1>
                <p className="card_description">
                  Легко найти подходящую под ваши задачи игрушку. Развивайте
                  логику, память или мелкую моторику.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tarif_plans">
        <div className="container">
          <div className="cont">
            <div className="top">
              <h1 className="tarif_title">Тарифы</h1>
            </div>
            <div className="cards">
              <div className="card">
                <div className="card_cont">
                  <h1 className="card_title">Малыш</h1>
                  <p className="card_desc">
                    Если нужны простые игрушки в небольшом количестве
                  </p>
                  <button className="card_btn">1000 руб./мес.</button>
                  <h1 className="cost_title">80 токенов</h1>
                  <button className="cost_btn">Выбрать</button>
                </div>
                <h1 className="tarif_duraction">
                  1 месяц
                </h1>
              </div>
              <div className="card">
                <div className="card_cont">
                  <h1 className="card_title">Активный</h1>
                  <p className="card_desc">
                    Если нужны простые игрушки в небольшом количестве
                  </p>
                  <button className="card_btn">1000 руб./мес.</button>
                  <h1 className="cost_title">140 токенов</h1>
                  <button className="cost_btn">Выбрать</button>
                </div>
                <h1 className="tarif_duraction">
                  3 месяца
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="cont">
            <div className="logo">LogoType</div>
            <div className="column">
              <h1 className="column_title">О нас</h1>
              <a href="#" className="column_link">
                Как пользоваться
              </a>
              <a href="#" className="column_link">
                Отзывы
              </a>
              <a href="#" className="column_link">
                Блог
              </a>
            </div>
            <div className="column">
              <h1 className="column_title">Используй Tidi</h1>
              <a href="#" className="column_link">
                Каталог
              </a>
              <a href="#" className="column_link">
                Тарифы
              </a>
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
    </div>
  );
};

export default Home;
