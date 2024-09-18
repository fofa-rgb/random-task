import { useState } from "react";
import "./SideBar.css";
import { useSelector, useDispatch } from 'react-redux';
import { toggleOff } from "../state/sideBarSlice";
import CartItem from "./CartItem";

function SideBar({showSideBar}) {
    const sideBarShowing= useSelector(state=> state.sideBar.value);
    const cartProducts = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
  
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
          <span className="hide-icon" onClick={() => dispatch(toggleOff())}>
            &times;
          </span>
          {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartProducts.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
