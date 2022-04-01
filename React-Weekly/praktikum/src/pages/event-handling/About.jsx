import React from 'react'
import Sidebar from './Sidebar-About'
import "./css/sidebar.css"
import Header from './Head-Page'

export default function About(props) {
  return (
    <div className='App'>
        <Sidebar />
        <Header title="About"/>
    </div>
  )
}