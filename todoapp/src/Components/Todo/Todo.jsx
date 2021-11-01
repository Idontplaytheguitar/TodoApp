import React from "react";

export function Todo({text,title,  done}){

    return(
        <div className="todo">
            <div className="todoTitle">
                <h2>{title}</h2>
            </div>
            <div className="todoText">
                <p>{text}</p>
            </div>
            <div className="todoDone">
                <p>{done}</p>
            </div>
        </div>
    )
}