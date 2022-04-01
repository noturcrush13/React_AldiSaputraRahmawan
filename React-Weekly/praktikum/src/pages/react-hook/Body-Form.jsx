import React from 'react'
import './css/inputform.css'
import { useState } from 'react'

export default function BodyForm(props){
  const [getInput, setInput] = useState('')
  const {dataTodos} = props


  const submitHandler = (event) => {
    event.preventDefault()
    if(getInput === ""){
      return alert("You must fill the form!")
    }
    let id = 1;
    if(dataTodos.length > 0) {
        id = dataTodos.length + 1
    }
    let addTodo = {
      id : id,
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
