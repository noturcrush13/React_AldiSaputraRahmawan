import React, { Component } from 'react'
import './css/inputform.css'
import { useState } from 'react'

export default function BodyForm(props){
  const [getInput, setInput] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    if(getInput === ""){
      return console.log("You must fill the form!")
    }
    const addTodo = {
      id : Math.floor(Math.random(1) * 100),
      title : getInput,
      completed : false
    }

    props.onAddTodo(addTodo)

    setInput('')

  }

  const handleInput = (event) => {
    setInput(event.target.value)
  }


  return(
    <div className='form-box'>
      <form onSubmit={submitHandler}>
        <input className='inputform' value={getInput} type="text" placeholder='Add something' onChange={handleInput}/>
        <button className='add-btn'>Add</button>
      </form>
    </div>
  )
}
