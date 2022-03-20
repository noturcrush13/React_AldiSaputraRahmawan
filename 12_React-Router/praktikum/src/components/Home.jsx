import React from 'react'
import Sidebar from './Sidebar'
import "./css/sidebar.css"
import Header from './Head-Page'
import { useHistory } from "react-router-dom";


export default function Home({props}) {
  return (
    <div className='App'>
        <Header title="To Do App"/>
        <Sidebar />
    </div>
  )
}
