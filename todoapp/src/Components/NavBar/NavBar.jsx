import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'


export const NavBar = () => {

    return (
        <div className="navbar">
        <img src='https://www.ifbd.be/wp-content/uploads/2019/06/master-your-to-do-list.jpg' alt="logo" />
            <div className="filtersNvbr">

                <div className="navbarLinks">
                    <NavLink className='NavLinks' to="/home">Home</NavLink>
                    <NavLink className='NavLinks' to="/addToDo">Add something to do!</NavLink>
                </div>
            </div>
        </div>
    );
};
