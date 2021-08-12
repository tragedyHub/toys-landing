import React from "react";

const AdminTokens = () => {
    return (
        <div className="admin_tokens">
            <div className="container">
                <div className="cont">
                    <div className="row">
                        <div className="admin_tokens_card">
                            <label>Аккаунт</label>
                            <input type="text" placeholder="login" />
                        </div>
                        <div className="admin_tokens_card">
                            <label>Количество токенов</label>
                            <input type="text" placeholder="100" />
                        </div>
                    </div>
                    <button className="tokens_submit">Начислить токены</button>
                </div>
            </div>
        </div>
    );
};

export default AdminTokens;
