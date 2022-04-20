import "./Home.css"
import React, {useState} from 'react';
import {gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';


const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data

    return (
        <tr>
            <td>{id}</td>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenis_kelamin}</td>
            {/* <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td> */}
        </tr>
    )
}

export default ListItem;