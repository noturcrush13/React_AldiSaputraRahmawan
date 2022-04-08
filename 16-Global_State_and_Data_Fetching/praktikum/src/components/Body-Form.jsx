import React from 'react'
import './css/inputform.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/todoSlice'

export default function BodyForm(props){
  const dispatch = useDispatch()

  const [getInput, setInput] = useState('');
  console.log(getInput)
  // const {dataTodos} = props


  const submitHandler = (event) => {
    event.preventDefault()
    if(getInput === ""){
      return alert("You must fill the form!")
    }
    dispatch(addTask(getInput))
    setInput('')
    // const newData = {
    //   title: getInput.title}
    // let id = 1;
    // if(dataTodos.length > 0) {
    //     id = dataTodos.length + 1
    // }
    // let addTodo = {
    //   title : getInput,
    //   completed : false
    // }

    // props.onAddTodo(addTodo)
    
    

  }

  const handleInput = (event) => {
    console.log("masuk ke onchange");
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
