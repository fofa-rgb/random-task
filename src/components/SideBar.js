import { useState } from "react";
import "./SideBar.css";
import { useSelector, useDispatch } from 'react-redux';
import { toggleOff } from "../app/sideBarSlice";

function SideBar({showSideBar}) {
    const sideBarShowing= useSelector(state=> state.sideBar.value);
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
            X
          </span>
          <span>Filter 1</span>
          <span>Filter 2</span>
          <span>Filter 3</span>
          <span>Filter 4</span>
          <span>Filter 5</span>
          <span>Filter 6</span>
          <span>Filter 2</span>
          <span>Filter 3</span>
          <span>Filter 4</span>
          <span>Filter 5</span>
          <span>Filter 6</span>
          <span>Filter 6</span>
          <span>Filter 2</span>
          <span>Filter 3</span>
          <span>Filter 4</span>
          <span>Filter 5</span>
          <span>Filter 6</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
