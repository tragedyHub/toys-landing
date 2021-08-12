import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AdminMain from "./AdminMain";
import AdminNav from "./AdminNav";
import AdminRegister from "./AdminRegister";
import AdminTokens from "./AdminTokens";
const Admin = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="admin_title">Панель администратора</h1>
                <AdminNav />
            </div>
            <Switch>
                <Route path="/" render={() => <AdminMain />}></Route>
                {/* <Route path="/" render={() => <AdminTokens />}></Route> */}
                {/* <Route path="/" render={() => <AdminRegister />}></Route> */}
            </Switch>
            <Footer />
        </div>
    );
};

export default Admin;
