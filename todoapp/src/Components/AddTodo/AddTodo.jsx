import React, {useState} from "react";
import { useDispatch } from "react-redux";

export function AddTodo() {

    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({type: "ADD_TODO", text: value});
    }

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className='ContainerATD'>
            <form className='FormAddToDo' onSubmit={(event) => handleSubmit(event)}>
                <textarea placeholder="What are you going to do?" onChange={handleChange} value={value}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}