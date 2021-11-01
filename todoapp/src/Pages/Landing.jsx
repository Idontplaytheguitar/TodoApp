import React from "react";
import { NavLink } from "react-router-dom";

export function Landing() {

    return (
        <div >
            <div className="title">
                <h1> Welcome to my To do app! </h1>
            </div>
            <div className="subtitle">
                <NavLink to="/home"> Click here to enter </NavLink>
            </div>
        </div>
    );
}