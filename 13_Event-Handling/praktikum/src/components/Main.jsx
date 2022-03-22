import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

export default function Mainpage({listData}){
    return(
        <>
            <Header title="To Do List" />
            {listData.map((list) => <Body list={list}/>)}
        </>
    )
}