import React from 'react';
import './CartItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../app/cartSlice';

function CartItem({product, key}) {
    const cartProducts = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    function removeItem(){
        console.log("ameowmeow");
        dispatch(removeProduct(product.id));
    }
    return (
        <div className="cart-item">
            <button className="remove-button" onClick={removeItem}>
                 &times; 
            </button>
            <img src={product.image} alt={product.title} />
            <div className="cart-item-details">
                <h3 className="cart-item-title">{product.title}</h3>
                <p className="cart-item-price">Price: ${product.price}</p>
                <p className="cart-item-category">Category: {product.category}</p>
                <p className="cart-item-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
      </div>
    );
};

export default CartItem;