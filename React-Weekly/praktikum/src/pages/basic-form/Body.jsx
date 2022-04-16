import React, { useRef, useState } from 'react'
import './css/body.css'
import { Container, Row } from 'react-bootstrap'



export default function Body(props) {
    const mockData = {
        nama:"",
        email:"",
        noTelepon:"",
        pendidikan:"",
        kelas:"",
        harapan:""
    }

    const inputErrors = {
        nama:"",
        email:"",
        noTelepon:"",
    }
    
    const [data, setData] = useState(mockData);
    const [message, setMessage] = useState(inputErrors);
    const regexName = /^[a-zA-Z\s]*$/;
    const regexNoTelepon = /^[0-9]*$/;
    const regexEmail = /^\w+@[A-Za-z_]+?\.[a-zA-Z]{2,3}$/;
    const [IT, setIT] = useState(false);
    const [nonIT, setNonIT] = useState(false);
    const suratKesungguhan = useRef(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...data,
            [name]:value
        })

        if (name === "nama"){
            if(!regexName.test(value)){
                // console.log("nama harus berupa huruf!!")
                setMessage({...message, nama: "Nama harus berupa huruf!!!"})
            }
            else{
                setMessage("")
            }
        }
        if (name === "email"){
            if(!regexEmail.test(value)){
                setMessage({...message, email: "Email yang anda masukkan tidak sesuai format!!"})
            }
            else{
                setMessage("")
            }
        }

        if (name === "noTelepon"){
            if(!regexNoTelepon.test(value)){
                setMessage({...message, noTelepon: "Harus berupa angka!!"})
            }
            else{
                setMessage("")
            }
        }

        console.log("isi data form", data)
    }
  
    const handleSubmit = (e) => {
        if (message === ""){
            alert("Berhasil Mendaftar")
        }
        else {
            alert("Data Tidak Sesuai Format")
        }
    }

    const handleSelect = (e) => {
        setData({
            ...data,
            kelas: e.target.value
        })
        // console.log(data)
    }

    const resetData = (e) => {
        setData(mockData);
        setMessage("");
    }

    const radioChecked = (e) => {
        if(e.target.value === "IT"){
            setIT(!IT);
            setNonIT(false);
            setData({
               ...data,
               pendidikan:"IT" 
            })
        }
        else if(e.target.value === "NonIT"){
            setNonIT(!nonIT);
            setIT(false);
            setData({
                ...data,
                pendidikan:"NonIT"
            })
        }
    }



    return (
    <div className='form' >
        <form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <label>
                        Nama Lengkap :
                        <input 
                        className="biodata" 
                        name="nama" 
                        value={data.nama} 
                        type="text" 
                        placeholder="Masukkan nama anda" 
                        onChange={handleChange} 
                        required/>
                    {message.nama && <p style={{width: "100%", color: "red"}}>{message.nama}</p>}
                    </label>
                </Row>
                <Row>
                    <label>
                        Email :
                        <input 
                        className="biodata" 
                        name="email" 
                        value={data.email} 
                        type="email" 
                        placeholder="Masukkan email anda" 
                        onChange={handleChange}
                        required/>
                    {message.email && <p style={{width: "100%", color: "red"}}>{message.email}</p>}
                    </label>
                </Row>
                <Row>
                    <label>
                        No Telp :
                        <input 
                        className="biodata" 
                        name="noTelepon"
                        value={data.noTelepon}
                        type="text" 
                        placeholder="Masukkan nomor telepon anda" 
                        minLength="9"
                        maxLength="14"
                        onChange={handleChange}
                        required/>
                    {message.noTelepon && <p style={{width: "100%", color: "red"}}>{message.noTelepon}</p>}
                    </label>
                </Row>
            </Container>
            <Container>
                <label className='label-btn' required>
                    Latar Belakang Pendidikan :<br></br>
                    <input type="radio" 
                    value="IT" 
                    name="pendidikan" 
                    checked={IT}
                    onChange={handleChange}
                    onClick={radioChecked} />
                    <label htmlFor="IT">IT</label>

                    <input 
                    type="radio" 
                    value="NonIT" 
                    name="pendidikan"
                    checked={nonIT}
                    onChange={handleChange}
                    onClick={radioChecked}/>
                    <label htmlFor="NonIT">Non IT</label>
                </label>
            </Container>
            <Container>
                <Row>
                    <label htmlFor='kelas-coding'>Kelas Koding yang Dipilih :
                        <select className='biodata' name='kelas' id='kelas' onChange={handleSelect} required>
                            <option value='Default'>Pilih Salah Satu Program</option>
                            <option value='Golang'>Coding Backend with Golang</option>
                            <option value='ReactJS'>Coding Frontend with ReactJS</option>
                            <option value='Fullstack'>Fullstack Developer</option>
                        </select>
                    </label>
                </Row>
                <Row>
                    <label>
                        Foto Surat Kesungguhan :
                        <input 
                        className='biodata' 
                        type="file" 
                        id='userFile' 
                        name='filename'
                        ref={suratKesungguhan}
                        required/>
                    </label>
                </Row>
                <Row>
                    <label>
                        Harapan Untuk Coding Bootcamp Ini :
                        <textarea 
                        className="biodata" 
                        name='harapan' 
                        rows="4" 
                        cols="50"
                        value={data.harapan}
                        onChange={handleChange}/>
                    </label>
                </Row>
                <div>
                    <button className='submitbtn' value="submit">Submit</button>
                    <button className='resetbtn' onClick={resetData}>Reset</button>
                </div>
            </Container>
        </form>
    </div>
  )
}
