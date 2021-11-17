import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/actions";
import './AddTodo.css'

export function AddTodo() {

    const dispatch = useDispatch();
    const [value, setValue] = useState({
        desc:'',
        done:false,
        title:'',
        id: Math.random(),
        created: Date.now()
    });

    function handleSubmit(event, value) {   
        event.preventDefault();
        dispatch(add(value));
    }

    function handleChange(event) {
        if(event.target.name === 'desc'){
            setValue({...value, desc:event.target.value});
        }
        if(event.target.name === 'title'){
            setValue({...value, title:event.target.value});
        }   
    }

    useEffect(() => {
        console.log(value, "value.text");
        }, [value])

    return (
        <div className='ContainerATD'>
            <form className='FormAddToDo' onSubmit={(event) => handleSubmit(event,value)}>
                <textarea name='title' className='taT' placeholder='Title   ' onChange={handleChange} value={value.title}/>
                <textarea name='desc' className='ta' placeholder="Description" onChange={handleChange} value={value.desc}/>
                <button className='buttonS' type="submit">Add</button>
            </form>
        </div>
    );
}