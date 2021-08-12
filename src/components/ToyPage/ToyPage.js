import React from "react";
import "./toy-page.scss";

import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import itemLogo from "../../images/item_image.png";

const ToyPage = () => {
  return (
    <div className="toy_page">
      <Header />
      <div className="main_cont">
        <div className="container">
          <div className="cont">
            <div className="toy_desc_row">
              <div className="toy_desc_image_block">
                <img src={itemLogo} alt="item" className="toy_image" />
              </div>
              <div className="toy_desc_params">
                <div className="toy_desc_params_content">
                  <h1 className="toy_content_title title">
                    Самолет игрушечный
                  </h1>
                  <div className="toy_content_row">
                    <h1 className="toy_content_row_title">
                      Рекомендуемый возраст:
                    </h1>
                    <p className="toy_content_row_text">От 1 года</p>
                  </div>
                  <div className="toy_content_row">
                    <h1 className="toy_content_row_title">Производитель:</h1>
                    <p className="toy_content_row_text">Hasbro</p>
                  </div>
                  <div className="toy_content_row">
                    <h1 className="toy_content_row_title">Код товара:</h1>
                    <p className="toy_content_row_text">24243535</p>
                  </div>
                  <h1 className="toy_desc_cost">18 токенов</h1>
                  <button className="card_btn">
                    Выбрать
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.7964 16.9167H10.5913L8.61325 9.66668H23.4214L19.7964 16.9167ZM25.4756 8.3955C25.0322 7.67775 24.2637 7.25 23.4202 7.25H7.95358L7.20803 4.51554C7.06424 3.98992 6.58695 3.625 6.04199 3.625H3.62533C2.95712 3.625 2.41699 4.16633 2.41699 4.83333C2.41699 5.50033 2.95712 6.04167 3.62533 6.04167H5.11883L8.50095 18.4428C8.64474 18.9684 9.12203 19.3333 9.66699 19.3333H20.542C21 19.3333 21.418 19.0747 21.6235 18.6651L25.582 10.7469C25.9602 9.99171 25.9191 9.11325 25.4756 8.3955ZM9.06236 21.75C8.06186 21.75 7.24986 22.5608 7.24986 23.5625C7.24986 24.5642 8.06186 25.375 9.06236 25.375C10.0629 25.375 10.8749 24.5642 10.8749 23.5625C10.8749 22.5608 10.0629 21.75 9.06236 21.75ZM19.3336 23.5625C19.3336 22.5608 20.1456 21.75 21.1461 21.75C22.1466 21.75 22.9586 22.5608 22.9586 23.5625C22.9586 24.5642 22.1466 25.375 21.1461 25.375C20.1456 25.375 19.3336 24.5642 19.3336 23.5625Z"
                        fill="white"
                      />
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="3"
                        width="24"
                        height="23"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.7964 16.9167H10.5913L8.61325 9.66668H23.4214L19.7964 16.9167ZM25.4756 8.3955C25.0322 7.67775 24.2637 7.25 23.4202 7.25H7.95358L7.20803 4.51554C7.06424 3.98992 6.58695 3.625 6.04199 3.625H3.62533C2.95712 3.625 2.41699 4.16633 2.41699 4.83333C2.41699 5.50033 2.95712 6.04167 3.62533 6.04167H5.11883L8.50095 18.4428C8.64474 18.9684 9.12203 19.3333 9.66699 19.3333H20.542C21 19.3333 21.418 19.0747 21.6235 18.6651L25.582 10.7469C25.9602 9.99171 25.9191 9.11325 25.4756 8.3955ZM9.06236 21.75C8.06186 21.75 7.24986 22.5608 7.24986 23.5625C7.24986 24.5642 8.06186 25.375 9.06236 25.375C10.0629 25.375 10.8749 24.5642 10.8749 23.5625C10.8749 22.5608 10.0629 21.75 9.06236 21.75ZM19.3336 23.5625C19.3336 22.5608 20.1456 21.75 21.1461 21.75C22.1466 21.75 22.9586 22.5608 22.9586 23.5625C22.9586 24.5642 22.1466 25.375 21.1461 25.375C20.1456 25.375 19.3336 24.5642 19.3336 23.5625Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)">
                        <rect width="29" height="29" fill="white" />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="toy_description_text_block">
              <h1 className="toy_description_title title">Описание</h1>
              <p className="toy_description_text">
                Keep inquisitive babies busy with this brilliant Melissa and
                Doug Jungle Activity Table. It’s suitable for children aged 12
                months+ and has a jungle theme that’s alive with vibrant
                creatures and vivid patterns guaranteed to keep them
                entertained.
              </p>
              <p className="toy_description_text">
                There are 8 engaging activities designed to help with your
                child’s developmental skills, as they learn about different
                types of movement. From turning gears and a rolling tube to
                sliding beads and a spinning wheel, there’s so much to encourage
                learning and creative play. As they explore each activity, they
                can meet the playful chimp and the slippery snake along with
                other colourful characters like the parrot and the butterfly –
                and don’t forget the elephant of course!
              </p>
              <p className="toy_description_text">
                The Melissa and Doug Jungle Activity Table has a sturdy wooden
                build that’s not only in-keeping with its jungle theme but
                extra-durable as well. This means it’s sure to be a long-lasting
                and much-loved addition to any nursery or bedroom, and will
                capture your little one’s imagination for years to come.
              </p>
            </div>
            <div className="toy_advantages_block">
              <div className="toy_advantages_row">
                <svg
                  className="toy_advantages_row_arrow"
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11L10.5 12L13.5 12L13.5 11L10.5 11Z"
                    fill="#BB6BD9"
                  />
                </svg>

                <h1 className="toy_advantages_row_title">
                  Развивает память ребенка
                </h1>
              </div>
              <div className="toy_advantages_row">
                <svg
                  className="toy_advantages_row_arrow"
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11L10.5 12L13.5 12L13.5 11L10.5 11Z"
                    fill="#BB6BD9"
                  />
                </svg>

                <h1 className="toy_advantages_row_title">
                  Подходит как взрослым, так и малышам
                </h1>
              </div>
              <div className="toy_advantages_row">
                <svg
                  className="toy_advantages_row_arrow"
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11L10.5 12L13.5 12L13.5 11L10.5 11Z"
                    fill="#BB6BD9"
                  />
                </svg>

                <h1 className="toy_advantages_row_title">
                  Популярный бренд, гарантирующий качество продукта
                </h1>
              </div>
              <div className="toy_advantages_row">
                <svg
                  className="toy_advantages_row_arrow"
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11L10.5 12L13.5 12L13.5 11L10.5 11Z"
                    fill="#BB6BD9"
                  />
                </svg>

                <h1 className="toy_advantages_row_title">
                  Бесплатная доставка
                </h1>
              </div>
            </div>
            <div className="anothers_offers">
              <h1 className="anothers_offers_title title">
                Вам может понравиться с этой игрушкой:
              </h1>
              <div className="another_offers_row">
                <div className="another_offers_item">
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
                <div className="another_offers_item">
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
                <div className="another_offers_item">
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
                <div className="another_offers_item">
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
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default ToyPage;
