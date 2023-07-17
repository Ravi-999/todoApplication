import React from "react";
import rightTick from "../public/images.png";
import rightCompletedTick from "../public/images1.png";
import wrongTick from "../public/images2.png";
import "./Item.scss";
import {todoActions} from '../store' 
import {useDispatch} from 'react-redux'

function Item({ title, isCompleted }) {

    const dispatch = useDispatch();
    const deleteItemHandler = ()=>{
        dispatch(todoActions.removeItem(title));
    }
    const changeTaskStatusHandler = ()=>{
        dispatch(todoActions.changeTaskStatus(title));
    }

  return (
    <div className="item">
      <div className="item__box">
        <p>{title}</p>
        {isCompleted ? (
          <button onClick={changeTaskStatusHandler} className="rightTick">
            <img src={rightCompletedTick} alt="Right"></img>
          </button>
        ) : (
          <button onClick={changeTaskStatusHandler} className="rightTick">
            <img src={rightTick} alt="Right"></img>
          </button>
        )}
        <button onClick={deleteItemHandler} className="wrongTick">
          <img src={wrongTick} alt="Right"></img>
        </button>
      </div>
    </div>
  );
}

export default Item;
