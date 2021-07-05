import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./tarifs.scss";

const Tarifs = () => {
  const tarifList = [
    {
      title: "Малыш",
      description: "Если нужны простые игрушки в небольшом количестве",
      costPerMonth: 1000,
      costTokens: 80,
      duraction: "1 месяц",
    },
    {
      title: "Активный",
      description: "Если нужны простые игрушки в небольшом количестве",
      costPerMonth: 1000,
      costTokens: 140,
      duraction: "3 месяца",
    },
  ];

  return (
    <div className="tarifs_page">
      <Header />
      <div className="main_cont">
        <div className="container">
          <div className="cont">
            <h1 className="tarifs_page_title">Тарифы</h1>
            <div className="tarifs_items_list">
             
              {tarifList.map(item => {
                return (
                  <div className="tarifs_items_card">
                    <div className="card_cont">
                      <h1 className="card_title">{item.title}</h1>
                      <p className="card_desc">
                        {item.description}
                      </p>
                      <div className="cost_row">{item.costPerMonth} руб./мес.</div>
                      <h1 className="cost_title">{item.costTokens} токенов</h1>

                      <h1 className="tarif_duraction">{item.duraction}</h1>
                    </div>
                    <button className="card_btn">Выбрать</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tarifs;
