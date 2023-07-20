import React, { useContext } from "react";
import './Cart.css'
import CartItem from "../CartItem/Cartitem";
import AppContext from "../../context/AppContext";
import formatCurrency from './../../utils/formatCurrency';

const Cart = () => {
    const { cartItems, isCartVisible } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0)

    return (
        <section className={`cart ${isCartVisible ? 'cart-active' : ''}`}>
            <div className="cart-items">
                { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>) }
            </div>

            <div className="cart-resume">Total: {formatCurrency(totalPrice, 'BRL')}</div>
        </section>
    )
}

export default Cart;