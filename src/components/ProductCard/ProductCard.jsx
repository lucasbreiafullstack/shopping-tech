import React, { useContext } from "react";
import propTypes from 'prop-types'
import { BsFillCartPlusFill } from 'react-icons/bs'
import './ProductCard.css'
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";


const ProductCard = ({ data }) => {
    const { title, thumbnail, price } = data;
    const { cartItems, setCartItems } = useContext(AppContext);

    const handleAddCart = () =>{
        setCartItems([ ...cartItems, data ]);
    }

    return (
        <section className="product-card">
            
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} //regex para trocar letra 
                alt="product" 
                className="card_image"
            />

            <div className="card_infos">
                <h2 className="card_price"> {formatCurrency(price, 'BRL')} </h2>
                <h2 className="card_title"> {title} </h2>
            </div>

            <button 
                type="button" 
                className="button_add-cart"
                onClick={handleAddCart}
            >
                <BsFillCartPlusFill/>
            </button>

        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;