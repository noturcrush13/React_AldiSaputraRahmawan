import React from 'react'
import Header from './Title'
import Body from './Body'

export default function home({props}) {
  return (
    <div classname='App'>
        <Header title={"Pendaftaran Peserta Coding Bootcamp"}/>
        <Body/>
    </div>
  )
}
