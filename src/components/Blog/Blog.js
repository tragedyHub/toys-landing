import React from "react";
import "./blog.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const blogItems = [
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
    {
      title: "Заголовок блока",
      text: "Keep inquisitive babies busy with this brilliant Melissa and Doug Jungle Activity Table. It’s suitable for children aged 12 months+ and has a jungle theme that’s alive with vibrant creatures and vivid patterns guaranteed to keep them entertained.",
      date: "26.04.2021"
    },
  ];

  return (
    <div className="blog_page">
      <Header />
      <div className="main_cont">
        <div className="container">
          <div className="cont">
            <h1 className="blog_page_title">Блог</h1>
            <div className="blog_items_list">
              {blogItems.map(item => {
                return (
                  <div className="blog_list_item purple">
                    <h1 className="blog_list_item_title">{item.title}</h1>
                    <p className="blog_list_item_text">{item.text}</p>
                    <div className="blog_list_item_read_block">
                      <h1 className="arcticle_date">26.04.2021</h1>
                      <div style={{display: "flex", alignItems: "center"}}>
                      <NavLink className="blog_list_item_read_link" to="/blog/article">
                        Читать
                      </NavLink>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5H20V10.5H0V13.5Z"
                          fill="#fff"
                        />
                      </svg>
                      </div>
                    </div>
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

export default Blog;
