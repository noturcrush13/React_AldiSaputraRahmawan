import React from 'react'
import Body_Page from './Body-Page'
import Header from './Head-Page'
import Sidebar from './Sidebar-About'

export default function About_Author({props}) {
  return (
    <div className='App'>
        <Header title="About Author"/>
        <Sidebar />
        <Body_Page content="This app was developed by someone, a self-taught web developer and technical writer."/>
    </div>
  )
}