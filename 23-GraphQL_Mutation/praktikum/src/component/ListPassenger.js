import ListItem from './ListItem';
import React, {useState} from 'react';
import {gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';

const DataPassenger = gql`
query QueryData {
    passenger {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const GetLazyPassenger = gql`
query QueryData($id: Int ) {
    passenger(where: {id: {_eq: $id}}) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const insertPassenger = gql`
mutation InsertData($jenis_kelamin: String = "", $nama: String = "", $umur: Int ) {
  insert_passenger(objects: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
    affected_rows
  }
}
`;

const DeleteData = gql`mutation Delete($id: Int = 10) {
    delete_passenger(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
        jenis_kelamin
        nama
        umur
      }
    }
  }
`;

const UpdateData = gql`
mutation Update($_eq: Int, $id: Int) {
    update_passenger(where: {id: {_eq: $_eq}}, _set: {id: $id}) {
      affected_rows
      returning {
        id
        jenis_kelamin
        nama
      }
    }
  }
`;

const ListPassenger = props => {
    const { data: dataPassenger, loading, error } = useQuery(DataPassenger);
    const [getPassenger, { data: dataLazyPassenger, loading: loadingLazyPassenger }] = useLazyQuery(GetLazyPassenger);
    const [insertPengunjung, {loading: loadingInsert}] = useMutation(insertPassenger, {refetchQueries: [{query: DataPassenger}]});
    const [deletePengunjung, {loading: loadingDelete}] = useMutation(DeleteData, {refetchQueries: [{query: DataPassenger}]});
    const [updatePengunjung, {loading: loadingUpdate}] = useMutation(UpdateData, {refetchQueries: [{query: DataPassenger}]});
    const [id, setId] = useState();
    const [idUpdate, setIdUpdate] = useState();
    // console.log(dataPassenger)

    const [state, setState] = useState({
        nama: "",
        umur: "",
        jenis_kelamin: "Pria",
        editing: true,
      })
    

    const handleChange = (e) => {
        // console.log("e.target.value = ",e.target.value);
        setId(e.target.value);
    }

    const handleSearch = () => {
        getPassenger({ variables: {id: id}});
    }

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = () => {
        if (state.nama.trim() && state.umur && state.jenis_kelamin) {
            const umur = state.umur
            if (umur >= 75 || umur <= 12) {
                alert("Umur tidak sesuai")
            } else {
                const newData = {
                    nama: state.nama,
                    umur: state.umur,
                    jenis_kelamin: state.jenis_kelamin,
                }
                // props.tambahPengunjung(newData)
                insertPengunjung({variables: newData});
                setState({
                    ...state,
                    nama: "",
                    umur: "",
                    jenis_kelamin: "Pria",
                    editing: true,
                })
            }
        } else {
            alert("Data tidak boleh kosong")
        }
    }

    const handleDelete = () => {
        if (id) {
            deletePengunjung({variables: {id: id}});
            setId("");
        } else {
            alert("Pilih data yang akan dihapus")
        }
    }

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>ID</td>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {dataPassenger && dataPassenger.passenger.map(item => (
                    <>
                        <ListItem
                            key={item.id}
                            data={item}
                            // hapusPengunjung={props.hapusPengunjung}
                        />
                        <button type="submit" onClick={() => deletePengunjung({variables: {id: item.id}})}>delete</button>
                        <input type="text" placeholder="input Update" onChange={(e) => {
                            setIdUpdate(e.target.value);
                        }}></input>
                        <button type="submit" onClick={() => {
                            updatePengunjung({variables: {_eq: item.id, id: idUpdate}});
                            setIdUpdate("");
                        }}>edit</button>
                    </>

                ))}
            </table>
            <h3>Cari Pengunjung</h3>
            <input type="text" onChange={handleChange}/>
            <button type="submit" onClick={handleSearch}>Search</button>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                {dataLazyPassenger && dataLazyPassenger.passenger.map(item => (
                    <>
                        <thead bgcolor="red">
                        <td>ID</td>
                        <td>Nama</td>
                        <td>Umur</td>
                        <td>Jenis Kelamin</td>
                        <td bgcolor="white" className="removeBorder"></td>
                        </thead>
                        <ListItem key={item.id} data={item}/>
                    </>
                ))}
            </table>
            <div>
            <div onSubmit={handleSubmit}>
                <h3>Input Pengunjung</h3>
                <p>Masukkan Nama Anda</p>
                <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
                <p>Masukkan Umur Anda</p>
                <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
                <p>Masukkan Jenis Kelamin Anda</p>
                <select onChange={onChange} name="jenisKelamin">
                <option value="Pria" selected>
                    Pria
                </option>
                <option value="Wanita">Wanita</option>
                </select>
                <p></p>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <h3>Delete Data</h3>
                <p>Masukkan ID</p>
                <input type="text" className="input-text" placeholder="ID anda ..." value={id} name="id" onChange={handleChange} />
                <button type="submit" onClick={handleDelete}>Delete</button>
            </div>
            </div>
        </div>
    )
  }

export default ListPassenger;