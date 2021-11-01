import React from "react";
import { Todo } from "../Todo/Todo";

export function Todos ({filteredTodos}){


    if(!filteredTodos){
        return (
        <h1>
            There's nothing to show.

        </h1>
        )
    }
    return (
        <div>
            {filteredTodos.map(todo => (
                <Todo text={todo.text} done={todo.done} title={todo.title}/>
            ))}
        </div>
    );
}