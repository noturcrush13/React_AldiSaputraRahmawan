import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const initialData = [
    {
        id: uuidv4(),
        title: "Mengerjakan Exercise",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Mengerjakan Assignment",
        completed: false
      }
]

export const todoSlice = createSlice({
    name: "todo",
    initialState :{
        todolist: initialData
    },
    reducers:{
        removeTask : (state,action) => {  
            state.todolist = state.todolist.filter((item) => {return item.id !== action.payload})
            console.log(action.payload)
        },
        addTask : (state, action) => { 
            // const addTodo = {
            //     id : uuidv4(),
            //     ...action.payload,
            // };
            console.log("ini add")
            let id = uuidv4()
            let addTodo = {id: id, title: action.payload, completed: false}
            state.todolist = [...state.todolist, addTodo]
            console.log(addTodo)
        },
        completedList : (state, action) => {
            state.todolist = state.todolist.map((item) => {
                if(item.id === action.payload){
                    item.completed = !item.completed
                }
                return item
            })
        }
    }
})

export const { removeTask, addTask, completedList} = todoSlice.actions
export default todoSlice.reducer