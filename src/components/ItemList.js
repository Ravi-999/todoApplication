import React,{useState,useRef} from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import "./ItemList.scss";

function ItemList() {
  const [dropDownValue,setDropDownValue] = useState(1);  
  let todoList = useSelector((state) => state.todoItems);
  const selectRef = useRef();

  const dropDownClickHandler = ()=>{
    setDropDownValue(selectRef.current.value);
  }
  
  if(dropDownValue === 'completed') todoList = todoList.filter((item)=> item.isCompleted);
  else if(dropDownValue === 'pending') todoList = todoList.filter((item) => !item.isCompleted);

  return (
    <div className="itemList">
      <select ref = {selectRef} className="dropdownButton" onChange={dropDownClickHandler} >
      <option value="all">ALL</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
      </select>
      {todoList.length ? (
        todoList.map((listItem) => (
          <Item
            key={listItem.id}
            title={listItem.title}
            isCompleted={listItem.isCompleted}
          />
        ))
      ) : 
        <p className='noTodoList'>No Todo List</p>
      }
    </div>
  );
}

export default ItemList;
