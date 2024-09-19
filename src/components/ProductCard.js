import React, { useEffect } from 'react';

import './ProductCard.css'
import {useRive, Layout, Fit, Alignment, EventType} from '@rive-app/react-canvas';
import {  useDispatch } from 'react-redux';
import { addProduct } from '../state/cartSlice';


export const RiveBtn = ({ RiveComponent}) => {
    return <RiveComponent style={{width:"50%"}} />;
};

function ProductCard({ product, onClick }) {
    const dispatch = useDispatch();
    

    const { rive, RiveComponent } = useRive({
        src: "purchase.riv",
        stateMachines: "add to cart",
        layout: new Layout({
            fit: Fit.FitWidth, 
            alignment: Alignment.Center,
        }),
        autoplay: true,
    });

    

    
    const onRiveEventReceived = (riveEvent) => {
        const eventData = riveEvent.data;
        const stateName =eventData[0];
        switch (stateName) {
            case "idle in":
                document.body.style.cursor = "pointer";
                break;
            case "idle ex":
                document.body.style.cursor = "auto";
                break;
            case "idle in click ex":
                dispatch(addProduct(product));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (rive) { 
            rive.on(EventType.StateChange, onRiveEventReceived);
        }
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rive]);
   
   
    return (
        <>
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" onClick={onClick}/>
            <div className="product-details">
                <h2 className="product-title" onClick={onClick}>{product.title}</h2>
                <div className="product-footer" >
                    <p className="product-price" onClick={onClick}>${product.price}</p>
                    <RiveBtn rive={rive} RiveComponent={RiveComponent} />
                </div>
            </div>
        </div>
         
          </>
    );
}

export default ProductCard;