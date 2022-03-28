import React from 'react'
import './css/body.css'
import {Container} from 'react-bootstrap'

export default function Body() {
  return (
    <div className='form'>
        <Container>
            <label>
                Nama Lengkap :
                <input type="text" placeholder="Masukkan nama anda" />
            </label>
            <label>
                Email :
                <input type="email" placeholder="Masukkan email anda" />
            </label>
            <label>
                No Telp :
                <input type="number" placeholder="Masukkan nomor telepon anda" />
            </label>
        </Container>   
            <label className='label-btn'>
                Latar Belakang Pendidikan :
                <input className='label-btn' type="radio" value="IT" name="IT"/>IT
                <input className='label-btn' type="radio" value="Non IT" name="Non IT"/>Non IT
            </label>
    </div>
  )
}
