import React from 'react'

const CartNavbar = () => {
    return (
        <nav className="cart_navbar">
            <div className="cart_navbar_item">
                <a href="/" className="cart_navbar_link">Корзина</a>
            </div>
            <div className="cart_navbar_item">
                <a href="/" className="cart_navbar_link">Обмен</a>
            </div>
            <div className="cart_navbar_item">
                <a href="/" className="cart_navbar_link">Избранное</a>
            </div>
        </nav>
    )
}

export default CartNavbar
