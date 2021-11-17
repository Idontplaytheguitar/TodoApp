import React from "react";
import { NavLink } from "react-router-dom";
import './Landing.css'

export function Landing() {

    return (
        <div className='LandingContainer' >
            <div className="title">
                <h1> Welcome to my To do app! </h1>
            </div>
            <div className="subtitle">
                <NavLink className='aH' to="/home"> Click here to enter </NavLink>
            </div>
        </div>
    );
}