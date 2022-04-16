import React from 'react';
import Header from './Header';
import Body from './Body';

export default function Mainpage({listData}){
    return(
        <>
            <Header title="To Do List" />
            {listData.map((list) => <Body list={list}/>)}
        </>
    )
}