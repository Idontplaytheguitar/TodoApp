import React, { useState } from "react";
import { useDispatch } from "react-redux";

export function Filters(){

    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if(event.target.value){
            setValue(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        dispatch({type: "FILTER_TODO", payload: value});
        dispatch({type: 'SET_FILTER', payload: value});
        
    }

    return(
        <div className="filtersC">
            <form className='filters'>
                <select className="filterSelect">
                    <option value=""></option>
                    <option value="SHOW_ALL">All</option>
                    <option value="SHOW_ACTIVE">To do</option>
                    <option value="SHOW_COMPLETED   ">Completed</option>
                </select>
            </form>
        </div>
    )

}