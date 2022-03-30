import React from 'react'
import './css/body.css'
import {Container} from 'react-bootstrap'
import {useForm} from 'react-hook-form';

export default function Body(props) {
    const {register, handleSubmit, errors} = useForm()
  
    return (
    <div className='form'>
        <form>
            <Container>
                <label>
                    Nama Lengkap :
                    <input className="biodata" type="text" placeholder="Masukkan nama anda" required/>
                </label>
                <label>
                    Email :
                    <input className="biodata" type="email" placeholder="Masukkan email anda" required/>
                </label>
                <label>
                    No Telp :
                    <input 
                    className="biodata" 
                    type="text" 
                    laceholder="Masukkan nomor telepon anda" 
                    minlength="9" 
                    maxlength="14" 
                    required/>
                </label>
            </Container>   
            <label className='label-btn' required>
                Latar Belakang Pendidikan :<br></br>
                <input id="IT" type="radio" value="IT" name="IT"/>
                <label htmlFor="IT">IT</label>
                <input id="Non-IT" type="radio" value="Non IT" name="Non IT"/>
                <label htmlFor="Non-IT">Non IT</label>
            </label>
            <Container>
                <label htmlFor='kelas-coding'>Kelas Koding yang Dipilih :
                    <select className='biodata' name='kelas' id='kelas' required>
                        <option value='Default'>Pilih Salah Satu Program</option>
                        <option value='Golang'>Coding Backend with Golang</option>
                        <option value='ReactJS'>Coding Frontend with ReactJS</option>
                        <option value='Fullstack'>Fullstack Developer</option>
                    </select>
                </label>
                <label>
                    Foto Surat Kesungguhan :
                    <input className='biodata' type="file" id='userFile' name='filename' required/>
                </label>
                <label>
                    Harapan Untuk Coding Bootcamp Ini :
                    <textarea className="biodata" id='userHope' name='hope' rows="4" cols="50"/>
                </label>
                <div>
                    <button className='submit-btn'>Submit</button>
                    <button className='reset-btn'>Reset</button>
                </div>
            </Container>
        </form>
    </div>
  )
}
