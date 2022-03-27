import React from "react";
import "./css/todolist.css";
import {AiOutlineFileDone} from "react-icons/ai"


export default function Body(props){
    const {dataTodos, removeTask, completedList} = props
    return (
        <div> 
            <ul className="list-todo">{
                dataTodos.map((list, index) => {
                    return (     
                    <li key={list.id} className={list.completed ? "completed" : "uncompleted"}>
                        <AiOutlineFileDone className="boxes" onClick={() => completedList(list.id)} />
                        {list.title} 
                    <button type="button" className="delete-btn" onClick={() => removeTask(index)}>
                        delete
                        </button>
                </li>)
                })
            }</ul>
        </div>
    )
}