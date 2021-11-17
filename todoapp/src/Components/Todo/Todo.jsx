import React from "react";
import { useDispatch } from "react-redux";
import { delteT, filterT, getTodos } from "../../Redux/actions";
import './Todo.css'

export function Todo({text, title,  done, id, created}){

    const dispatch = useDispatch();

    function handleDelete(e, id){
        e.preventDefault();
        dispatch(delteT(id)); 
        setTimeout(() => {
            dispatch(filterT());
            dispatch(filterT());
        }, 500);
    }
    return(
        <div className="todo">
            <button className='delete' onClick={(e) =>handleDelete(e, id)}>✘</button>
                <p className='oth'>Title:</p>
            <div className="todoTitle">
                <h2 className='tt'>{title}</h2>
            </div>
                <p className='oth' >Description:</p>
            <div className="todoText">
                <p className='td'>{text}</p>
            </div>
            <div className="todoDone">
                <p>{done}</p>
            </div>
        </div>
    )
}