import React from "react";
import "./home.scss";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import main_cont_image from "../../images/main_cont.png";
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
            
            <Header />
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
      <Footer />
    </div>
  );
};

export default Home;
