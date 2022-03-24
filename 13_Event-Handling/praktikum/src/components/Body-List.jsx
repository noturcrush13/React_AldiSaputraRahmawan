import React, {useState} from "react";
import "./css/todolist.css"


export default function Body(props){
    const {dataTodos, removeTask} = props
    return (
        <div>
            <ul className="list-todo">{
                dataTodos.map((list, index) => {
                    return <li key={list.id}>{list.title} 
                    <button type="button" className="delete-btn" onClick={() => removeTask(index)}>
                        delete
                        </button>
                </li>
                })
            }</ul>
        </div>
    )
}