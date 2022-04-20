import './App.css';
import Home from './pages/home';
import React, {useState} from 'react';
import Contact_us from './pages/contact_us';
import {gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';

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

const insertBarang = gql`
mutation InsertData($id_barang: String = "", $jumlah: Int = 10) {
  insert_pesanan_barang(objects: {id_barang: $id_barang, jumlah: 300}) {
    affected_rows
  }
}
`;

const deleteBarang = gql`
mutation MyMutation($id: Int) {
  delete_pesanan_barang(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      id
      id_barang
      jumlah
    }
  }
}
`;


function App() {
  const { loading, error, data:dataQuery } = useQuery(GetData);
  const [getTodo, { data: dataLazy, loading: loadingLazy }] =
    useLazyQuery(GetTodoLazy);
  const [id, setId] = useState();
  const [barang, setBarang] = useState("");
  const [jumlah, setJumlah] = useState();
  const [insertData, {loading: loadingInsert}] = useMutation(insertBarang, {refetchQueries: [{query: GetData}]});
  const [deleteData, {loading: loadingDelete}] = useMutation(deleteBarang, {refetchQueries: [{query: GetData}]});

  const handleChange = (e) => {
    console.log("e.target.value = ",e.target.value);
    setId(e.target.value);
  }
  
  const handleClick = () => {
    getTodo({variables: {id: id}});
  }

  const handleInsert = (e) => {
    setBarang(e.target.value);
    console.log("barang = ",barang);
  }
  const handleJumlah = (e) => {
    setJumlah(e.target.value);
    console.log("jumlah = ",jumlah);
  }
  
  const handleSubmit = () => {
    insertData({variables: {id_barang: barang}});
  }

  const handleDelete = () => {
    deleteData({variables: {id: id}});
  }
  // console.log(dataLazy)
  // if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading</h1>
  console.info(dataQuery);
  return (
    <>
      <div className="App">
        <h1>hai</h1>
        {dataQuery.pesanan_barang.map(barang => (
          <>
            <button type="submit" onClick={() => {deleteData({variables : {id : barang.id}})}}>Delete</button>
            <h1>{barang.id}</h1>
            <p>=================================</p>
          </>
            
        ))}
        <input type="text" onChange={handleChange}/>
        <button type="submit" onClick={handleClick}>submit</button>
        {dataLazy?.pesanan_barang.map(barang => (
          <h1>{barang.id_barang}</h1>
        ))}
        <br></br>
        <h1>Add</h1>
        <input type="text" placeholder="input barang" onChange={handleInsert}/>
        {/* <input type="number" placeholder="input id" onChange={handleJumlah}/> */}
        <button type="submit" onClick={handleSubmit}>submit</button>

        <br></br>
        <h1>Delete</h1>
        <input type="text" placeholder="input id untuk delete" onChange={handleChange}/>
        <button type="submit" onClick={handleDelete}>submit</button>

        {/* <Home />
        <Contact_us /> */}
      </div>
    </>
  );
}

export default App;
