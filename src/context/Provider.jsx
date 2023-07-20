import React, { useState } from "react";
import propTypes from 'prop-types'
import AppContext from "./AppContext";

const Provider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartVisible, seIsCartVisible] = useState(false);

    const value = {
        products, 
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible, 
        seIsCartVisible
    }

    return(
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    ); 
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;