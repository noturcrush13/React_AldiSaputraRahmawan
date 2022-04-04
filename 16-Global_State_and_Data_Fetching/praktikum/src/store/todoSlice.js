import { createSlice } from '@reduxjs/toolkit';

const initialData = [
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

export const todoSlice = createSlice({
    name: "todo",
    initialState :{
        todolist: initialData
    },
    reducers:{
        removeTask : (state,action) => {  
            return state.todolist.filter((todo, index) => index !== action.payload)
            // setTodos(state.todolist.filter((todo, index) => index !== e))
        },
        addTask : (state, action) => {
        }
    }
})