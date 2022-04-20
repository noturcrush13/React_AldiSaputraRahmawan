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

const ListPassenger = props => {
    const { data: dataPassenger, loading, error } = useQuery(DataPassenger);
    const [getPassenger, { data: dataLazyPassenger, loading: loadingLazyPassenger }] = useLazyQuery(GetLazyPassenger);
    console.log(dataPassenger)
    const [id, setId] = useState();

    const handleChange = (e) => {
        // console.log("e.target.value = ",e.target.value);
        setId(e.target.value);
    }

    const handleSearch = () => {
        getPassenger({ variables: {id: id}});
    }
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {dataPassenger && dataPassenger.passenger.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        // hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
            <h3>Cari Pengunjung</h3>
            <input type="text" onChange={handleChange}/>
            <button type="submit" onClick={handleSearch}>Search</button>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                {dataLazyPassenger && dataLazyPassenger.passenger.map(item => (
                    <>
                        <thead bgcolor="red">
                        <td>Nama</td>
                        <td>Umur</td>
                        <td>Jenis Kelamin</td>
                        <td bgcolor="white" className="removeBorder"></td>
                        </thead>
                        <ListItem key={item.id} data={item}/>
                    </>
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;