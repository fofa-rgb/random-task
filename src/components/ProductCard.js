import React from 'react';
import './ProductCard.css'

function ProductCard({title}) {
    return (
        <div class="card">
            <h1>{title}</h1>
        </div>
    );
}

export default ProductCard;