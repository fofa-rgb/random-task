import React from 'react';
import './CartItem.css';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../state/cartSlice';
import { incrementItemInCart, decrementItemInCart } from '../state/cartSlice';

function CartItem({product}) {
    const dispatch = useDispatch();

    function removeItem(){
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
                <div>
                    <button className="modal-button" onClick={()=> dispatch(incrementItemInCart(product.id))}>+</button>
                    <span>{product.amount}</span> 
                    <button className="modal-button" onClick={()=> dispatch(decrementItemInCart(product.id))}>-</button>
                </div>
            </div>
      </div>
    );
};

export default CartItem;