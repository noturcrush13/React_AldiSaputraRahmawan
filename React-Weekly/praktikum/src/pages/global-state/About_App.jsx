import React from 'react'
import Body_Page from './Body-Page'
import Header from './Head-Page'
import Sidebar from './Sidebar-About'

export default function About_App({props}) {
  return (
    <div className='App'>
        <Header title="About App"/>
        <Sidebar />
        <Body_Page content="In this app, you can add, delete, submit, and edit items.
        To edit item, simply double click on it. Once you are done,
        press the enter key to resubmit. This app will persist your data in the browser 
        local storage. So whether you reload, close your app or reopened it, you still 
        have access to your to-dos items."/>
    </div>
  )
}
