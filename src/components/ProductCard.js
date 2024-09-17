import React from 'react';
import './ProductCard.css'

function ProductCard({product}) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} class="product-image" />
            <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <div className="product-footer">
                    <p className="product-price">${product.price}</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;