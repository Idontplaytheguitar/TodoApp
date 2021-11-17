import React, { useEffect } from "react";
import {Todos} from '../Components/Todos/Todos'
import {NavBar} from '../Components/NavBar/NavBar'
import { useDispatch, useSelector } from "react-redux";
import { filterT } from "../Redux/actions";

export function Home() {
    
    const dispatch = useDispatch();
    const filteredTodos = useSelector(state => state.filteredTodos)
    const update = useSelector(state => state.update)

    useEffect(() => {
        dispatch(filterT())
        dispatch(filterT())
        console.log(filteredTodos,'filteredTodos')
    }, [update]);

    
    return (
        <div className='Home'>
            <div className='Ncontainer'>
                <NavBar />
            </div>
            <div className='Tcontainer'>
                <Todos filteredTodos={filteredTodos} />
            </div>
          
        </div>
    );
}