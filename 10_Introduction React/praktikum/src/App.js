import './App.css';
import Home from './pages/home';
import React, {useState} from 'react';
import Contact_us from './pages/contact_us';
import {gql, useQuery, useLazyQuery} from '@apollo/client';

const GetData = gql`
query MyQuery {
  pesanan_barang {
    id
    id_barang
    jumlah
  }
}
`;
const GetTodoLazy = gql`
query MyQuery($id: Int) {
  pesanan_barang(where: {id: {_eq: $id}}) {
    id
    id_barang
    jumlah
  }
}
`;


function App() {
  const { loading, error, data:dataQuery } = useQuery(GetData);
  const [getTodo, { data: dataLazy, loading: loadingLazy }] =
    useLazyQuery(GetTodoLazy);
  const [id, setId] = useState();

  const handleChange = (e) => {
    console.log("e.target.value = ",e.target.value);
    setId(e.target.value);
  }
  
  const handleClick = () => {
    getTodo({variables: {id: id}});
  }
  console.log(dataLazy)
  // if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading</h1>
  console.info(dataQuery);
  return (
    <>
      <div className="App">
        <h1>hai</h1>
        {dataQuery.pesanan_barang.map(barang => (
          <h1>{barang.id}</h1>
        ))}
        <input type="text" onChange={handleChange}/>
        <button type="submit" onClick={handleClick}>submit</button>
        {dataLazy?.pesanan_barang.map(barang => (
          <h1>{barang.id_barang}</h1>
        ))}
        {/* <Home />
        <Contact_us /> */}
      </div>
    </>
  );
}

export default App;
