import React, { useEffect } from "react";
import {Todos} from '../Components/Todos/Todos'
import {NavBar} from '../Components/NavBar/NavBar'
import { useDispatch, useSelector } from "react-redux";

export function Home() {
    
    const dispatch = useDispatch();
    const filteredTodos = useSelector(state => state.todos.filteredTodos)
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        dispatch({ type: "FILTER_TODO" });
    }, [todos]);

    return (
        <div className='Home'>
            <div className='Ncontainer'>
                <NavBar />
            </div>
            <div className='Tcontainer'>
                <Todos todos={filteredTodos} />
            </div>
        </div>
    );
}