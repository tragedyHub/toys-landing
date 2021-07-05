import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./article.scss";

import article_image1 from "../../images/article_image1.png";
import article_image2 from "../../images/article_image2.png";
import article_image3 from "../../images/article_image3.png";
import author_logo from "../../images/author_logo.png";

import twitter_icon from "../../images/twitter_icon.svg";
import vk_icon from "../../images/vk_icon.svg";
import instagram_icon from "../../images/instagram_icon.svg";

const Article = () => {
  return (
    <div className="blog_article">
      <Header />
      <div className="main_cont">
        <div className="container">
          <div className="cont">
            <h1 className="article_title">Заголовок Блока</h1>
            <div className="article_cont">
              <div className="article_author">
                <img
                  src={author_logo}
                  className="article_author_logo"
                  alt="logo"
                />
                <div className="article_author_column">
                  <div className="article_author_row">
                    <h1 className="article_author_title">Nikita Rybochkin</h1>
                    <h1 className="article_author_work">CEO</h1>
                  </div>
                  <p className="author_date_public">26 марта 2021</p>
                </div>
              </div>
              <p className="article_text">
                Keep inquisitive babies busy with this brilliant Melissa and
                Doug Jungle Activity Table. It’s suitable for children aged 12
                months+ and has a jungle theme that’s alive with vibrant
                creatures and vivid patterns guaranteed to keep them
                entertained.А
              </p>

              <p className="article_text article_text_margin">
                Play is essential for child development as it contributes to
                their physical, social, cognitive and emotional well-being. In
                particular, daytime play outside (the garden for now) is
                beneficial to our circadian rhythm (our internal body clock),
                because when we are exposed to sunlight, our body increases the
                production of serotonin (a hormone used to synthesise melatonin,
                our sleep hormone). In return, we will get a good sleep and wake
                up energised – ready to play and learn effectively! Also,
                playing in the garden is a fun way to get the kids to burn off
                excess energy.
              </p>
              <img
                src={article_image1}
                alt="article image"
                className="article_image"
              />
              <p className="article_text">
                Play is essential for child development as it contributes to
                their physical, social, cognitive and emotional well-being. In
                particular, daytime play outside (the garden for now) is
                beneficial to our circadian rhythm (our internal body clock),
                because when we are exposed to sunlight, our body increases the
                production of serotonin (a hormone used to synthesise melatonin,
                our sleep hormone). In return, we will get a good sleep and wake
                up energised – ready to play and learn effectively! Also,
                playing in the garden is a fun way to get the kids to burn off
                excess energy.
              </p>
              <p className="article_text article_text_margin">
                Play is essential for child development as it contributes to
                their physical, social, cognitive and emotional well-being. In
                particular, daytime play outside (the garden for now) is
                beneficial to our circadian rhythm (our internal body clock),
                because when we are exposed to sunlight, our body increases the
                production of serotonin (a hormone used to synthesise melatonin,
                our sleep hormone). In return, we will get a good sleep and wake
                up energised – ready to play and learn effectively! Also,
                playing in the garden is a fun way to get the kids to burn off
                excess energy.Play is essential for child development as it
                contributes to their physical, social, cognitive and emotional
                well-being. In particular, daytime play outside (the garden for
                now) is beneficial to our circadian rhythm (our internal body
                clock), because when we are exposed to sunlight, our body
                increases the production of serotonin (a hormone used to
                synthesise melatonin, our sleep hormone). In return, we will get
                a good sleep and wake up energised.
              </p>
              <img
                src={article_image2}
                alt="article image"
                className="article_image"
              />
              <p className="article_text">
                Keep inquisitive babies busy with this brilliant Melissa and
                Doug Jungle Activity Table. It’s suitable for children aged 12
                months+ and has a jungle theme that’s alive with vibrant
                creatures and vivid patterns guaranteed to keep them
                entertained.
              </p>
              <img
                src={article_image3}
                alt="article image"
                className="article_image"
              />
              <div className="repost_article">
                <h1 className="repost_article_title">
                  Поделитесь этой статьей в социальных сетях:
                </h1>
                <div className="repost_row">
                  <img className="repost_icon" alt="icon" src={twitter_icon} />
                  <img className="repost_icon" alt="icon" src={vk_icon} />
                  <img
                    className="repost_icon"
                    alt="icon"
                    src={instagram_icon}
                  />
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

export default Article;
