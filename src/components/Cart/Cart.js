import React from "react";
import "./cart.scss";

import Header from "../Header/Header";
import CartNavbar from "./CartNavbar";

const Cart = () => {
    return (
        <div className="cart">
            <Header />
            <div className="main_cont">
                <div className="container">
                    <div className="cont">
                        <CartNavbar />
                        <table className="cart_table">
                            <thead>
                                <tr className="card_table_head_tr">
                                    <th>Название</th>
                                    <th>Производитель</th>
                                    <th>Количество</th>
                                    <th>Цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><h1>Самолет игрушечный</h1></th>
                                    <th><h1>Hasbro</h1></th>
                                    <th>18 токенов/мес</th>
                                    <th>18 токенов/мес</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
