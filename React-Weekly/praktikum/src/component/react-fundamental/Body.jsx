import React from "react";
import styles from '../assets/listdata.module.css'

export default function Body({list}){
    return (
        <div>
            <p style={list.completed ? {textDecoration : 'line-through'} : {}} className={styles.pillborder}>{list.title}</p>
        </div>
    )
}