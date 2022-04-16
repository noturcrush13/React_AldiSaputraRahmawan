import React from "react";
import "./css/todolist.css";
import {AiOutlineFileDone} from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux";
import { removeTask, completedList} from './store/todoSlice'


export default function Body(props){
    // const {dataTodos, removeTask, completedList} = props
    const dataTodos = useSelector((state) => state.todolist.todolist)
    console.log(dataTodos)
    const dispatch = useDispatch()
    return (
        <div> 
            <ul className="list-todo">{
                dataTodos.map((list) => (  
                    <li key={list.id} className={list.completed ? "completed" : "uncompleted"}>
                        <AiOutlineFileDone className="boxes" onClick={() => {dispatch(completedList(list.id))}}/>
                        {list.title} 
                    <button type="button" className="delete-btn" onClick={() => {dispatch(removeTask(list.id))}}>
                        delete
                        </button>
                </li>
    ))
            }</ul>
        </div>
    )
}