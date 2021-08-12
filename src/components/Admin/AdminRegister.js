import React from "react";

const AdminRegister = () => {
    return (
        <div className="admin_register">
            <div className="container">
                <div className="cont">
                    <div className="admin_register_item">
                        <label>Имя</label>
                        <input type="text" placeholder="Иван" />
                    </div>
                    <div className="row mt">
                        <div className="admin_register_item mr">
                            <label>Телефон</label>
                            <input type="text" placeholder="+7" />
                        </div>
                        <div className="admin_register_item">
                            <label>Почта</label>
                            <input type="text" placeholder="mail@mail.ru" />
                        </div>
                    </div>
                    <div className="admin_register_item mt">
                        <label>Количество токенов</label>
                        <input type="text" placeholder="0" />
                    </div>
                    <button className="admin_register_submit">Зарегистрировать</button>
                </div>
            </div>
        </div>
    );
};

export default AdminRegister;
