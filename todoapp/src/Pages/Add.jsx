import React from "react";
import { AddTodo } from "../Components/AddTodo/AddTodo";
import { NavBar } from "../Components/NavBar/NavBar";
import './Add.css'

export function Add() {

    return (
        <div className='AddContainer'>
            <div className='Nvc'>
                <NavBar />
            </div>
            <div className='Add'>
                <AddTodo />
            </div>
        </div>
    );
}