import React from 'react'
import Sidebar from './Sidebar'
import "./css/sidebar.css"
import Header from './Head-Page'
import BodyForm from './Body-Form';
import BodyList from './Body-List';

export default function Home(props) {
  return (
    <div className='App'>
        <Header title="To Do App"/>
        <Sidebar />
        <BodyForm/>
        <BodyList />
    </div>
  )
}
