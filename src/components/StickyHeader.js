import React from 'react';
import './StickyHeader.css';
import { useState } from 'react';
import SideBar from './SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOff, toggleOn } from '../app/sideBarSlice';

function StickyHeader  () {
    const sideBarShowing= useSelector(state=> state.sideBar.value);
    const dispatch = useDispatch();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    return (
        <>
            <header className="sticky-header">
                <h1 className="title" onClick={scrollToTop}>Random</h1>
                <div className="icon" aria-label="Increment value"
                onClick={() => dispatch(toggleOn())}>🛒</div>
            </header>
            <SideBar showSideBar={sideBarShowing}/>
        </>

        
    );
};

export default StickyHeader;