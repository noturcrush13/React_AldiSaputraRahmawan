import { React, useEffect, useState } from "react";
import Axios from 'axios';

export default function ImportData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    console.log("ini fetching data")
    Axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
        console.log(res)
        setData(res)
    })
    // .catch((err) => {
    //     console.log(err)
    //     console.log("Data tidak ditemukan")
    //     setError("Data tidak ada")
    // });
  },[]);
    
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}
