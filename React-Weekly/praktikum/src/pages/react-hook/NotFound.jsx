import { useHistory } from "react-router-dom";
import React from 'react'
import Header from "./Head-Page";

export default function Item() {
    let history = useHistory();
    return (
        <>
          <Header title="PAGE 404 NOT FOUND"/>
          <button onClick={() => history.goBack()}>Go Home</button>
        </>
    );
};