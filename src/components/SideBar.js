
import "./SideBar.css";
import { useSelector, useDispatch } from 'react-redux';
import { toggleOff } from "../state/sideBarSlice";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { clearCart } from "../state/cartSlice";

function SideBar({showSideBar}) {
    const cartProducts = useSelector((state) => state.cart.value);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
      for(let i=0; i<cartProducts; i++){
        totalPrice+= cartProducts[i].price +cartProducts[i].amount;
      }
    },[cartProducts])

  return (
    <div className="sidebar-filter">
      <div
        className={
          showSideBar
            ? "sidebar-filter-data active"
            : "sidebar-filter-data"
        }
        style={{
          width: showSideBar
            ? window.innerWidth > 500
              ? 500
              : window.innerWidth
            : 0
        }}
      >
        <div className="filter-data">
          
          <div className="top-part">
            <span className="hide-icon" onClick={() => dispatch(toggleOff())}>
              &times;
            </span>
            <button className="modal-button" onClick={()=>dispatch(clearCart())}>clear</button>
          </div>
          {cartProducts.length === 0 ? (<p>Your cart is empty</p>) : (
           cartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
           ))
          )}
          {cartProducts.length !== 0 && <h3 className="price">Total Price: {totalPrice.toFixed(2)}$</h3>}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
