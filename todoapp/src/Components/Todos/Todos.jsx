import React from "react";
import { Todo } from "../Todo/Todo";
import './Todos.css'

export function Todos ({filteredTodos}){

    console.log(filteredTodos);

    if(!filteredTodos){
        return (
        <h1>
            There's nothing to show.

        </h1>
        )
    }
    return (
        <div className='todosCont'>
            {filteredTodos?.map(todo => (
                <Todo id={todo.id} created={todo.created} text={todo.desc} done={todo.done} title={todo.title}/>
            ))}
        </div>
    );
}