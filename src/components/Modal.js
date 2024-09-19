import React from 'react';
import './Modal.css'; // Add styles for the modal
import { useSelector } from 'react-redux';

function Modal({ onClose}) {
    const {product} = useSelector(state => state.modal)
    return (
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container">
            <div className="modal-content">
                <img src={product.image} alt={product.title} className="modal-product-image" />
                <h2>{product.title}</h2>
                <div className='text-container'><p>{product.description}</p></div>
                <button className="modal-button" onClick={onClose}>Close</button>
            </div>     
        </div>
        </div>
    );
}

export default Modal;