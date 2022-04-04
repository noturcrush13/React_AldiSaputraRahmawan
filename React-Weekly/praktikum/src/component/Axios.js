import { React, useEffect, useState } from "react";
import axios from 'axios';

export default function AxiosComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    console.log("ini fetching data");
    axios.get(" https://pokeapi.co/api/v2/pokemon/dittoasdasdasd").then((res) => {
        console.log(res.data.species)
        setData(res.data.species.name)
    })
    .catch((err) => {
        console.log(err)
        console.log("data tidak ada")
        setError("data tidak ditemukan")
    })
}, [])
  return (
    <div>
        <h1>hi</h1>
        <h1>{data}</h1>
        <h1>{error}</h1>
    </div>
  )
}
