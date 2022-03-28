import React from 'react'
import Header from './pages/Title'
import Body from './pages/Body'

export default function home({props}) {
  return (
    <div classname='App'>
        <Header title={"Pendaftaran Peserta Coding Bootcamp"}/>
        <Body/>
    </div>
  )
}
