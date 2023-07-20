import React, { useContext } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css'
import AppContext from "../../context/AppContext";

const CartButton = () => {

    const { cartItems, isCartVisible, seIsCartVisible } = useContext(AppContext)

    return (
        <button 
            type="button" 
            className="cart_button"
            onClick={() => seIsCartVisible(!isCartVisible)}
        >
            <AiOutlineShoppingCart/>
            { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
        </button>
    )
}

export default CartButton;