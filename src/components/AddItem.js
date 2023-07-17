import React,{useRef} from 'react'
import './AddItem.scss'
import {useDispatch} from 'react-redux'
import { todoActions } from '../store';

function AddItem() {

    const dispatch = useDispatch();
    const inputRef = useRef();
    const addTodoItemHandler = ()=>{
        dispatch(todoActions.addItem(inputRef.current.value));
        inputRef.current.value='';
        inputRef.current.placeholder='Add new Todo'
    }

  return (
    <div className="addItem">
        <div >
           <h4>Add Todo</h4>
           <input ref={inputRef} placeholder="Add new Todo"></input>
        </div>
        <button onClick={addTodoItemHandler}>Submit</button>
    </div>
  )
}

export default AddItem
