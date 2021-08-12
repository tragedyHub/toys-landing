import React from "react";
import { NavLink } from "react-router-dom";
import "./admin-main.scss";

const AdminNav = () => {
    return (
            <div className="admin_nav">
                <NavLink to="/admin" className="admin_nav_item active">Подписки</NavLink>
                <NavLink to="/admin/tokens" className="admin_nav_item">Начисления токенов</NavLink>
                <a href="/" className="admin_nav_item">Регистрация аккаунта</a>
            </div>
    );
};

export default AdminNav;
