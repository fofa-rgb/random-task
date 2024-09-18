import React from 'react';
import './StickyHeader.css';
import SideBar from './SideBar';
import { useSelector, useDispatch } from 'react-redux';
import {  toggleOn } from '../state/sideBarSlice';
import { newValue } from '../state/searchQuerySlice';

function StickyHeader  () {
    const sideBarShowing= useSelector(state=> state.sideBar.value);
    const searchQuery= useSelector(state=> state.searchQuery.value);
    const dispatch = useDispatch();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        dispatch(newValue(query));
    };


    return (
        <>
            <header className="sticky-header">
                <h1 className="title" onClick={scrollToTop}>Random</h1>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <div className="icon" aria-label="Increment value"
                onClick={() => dispatch(toggleOn())}>🛒</div>
                
            </header>
            <SideBar showSideBar={sideBarShowing}/>
        </>

        
    );
};

export default StickyHeader;