import React from 'react'
// import Sidebar from './Sidebar'
// import "./css/sidebar.css"
import Header from './Head-Page'
import BodyForm from './Body-Form';
import BodyList from './Body-List';
import { useState } from 'react';

export default function Home(props) {
  const lists = [
    {
      id: 1,
      title: "Mengerjakan Exercise",
      completed: true
    },
    {
      id: 2,
      title: "Mengerjakan Assignment",
      completed: false
    }
  ]
  const [getTodos, setTodos]= useState(lists);

  const eventAddTodo = (todo) =>{
    setTodos(getTodos.concat(todo))
  }

  const removeTask = (e) => {
    getTodos.filter((todo, index) => index !== e)
    setTodos(getTodos.filter((todo, index) => index !== e))
  }


  const completedList = (id) => {
    let updateData = getTodos.map((todo) => {
        if(todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    })
    console.log(updateData)
    setTodos(updateData)
};


  return (
    <div className='App'>
        <Header title="To Do App"/>
        {/* <Sidebar /> */}
        <BodyForm onAddTodo={eventAddTodo} dataTodos={getTodos}/>
        <BodyList dataTodos={getTodos} removeTask={removeTask} completedList={completedList}/>
    </div>
  )
}
