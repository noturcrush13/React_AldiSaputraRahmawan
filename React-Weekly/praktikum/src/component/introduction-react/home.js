import React from 'react';
import '../asset/css/main.css'
import orang from '../asset/img/orang.jpg'
import logo from '../asset/img/logo-ALTA@2x.png'
import '../asset/css/bootstrap.min.css'

export default function Home() {
  return (
    <React.Fragment>
      <div class="home-background"> 
          <header>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="alterra">
                    <a href="index.html"><img className="logo-atas" alt='logo' src={logo} /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  {/* <div class="container"> */}
                  <div className="row align-items-center navig">
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" className="aktif">HOME</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="about.html">EXPERIENCE</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                  </div>
                  {/* </div> */}
                </div>    
              </div>
            </div> 
          </header>
          <div className="container h-100">
            <div className="row align-items-center isi-home">
              <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                <img id="foto-profil" alt='orang' src={orang} />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="main-p">
                  <p className="sapaan" style={{textAlign: "left"}}>Hi, my name is </p>
                  <p className="nama" style={{textAlign: "left"}}>Anne Sullivan</p>
                  <p className="hobi" style={{textAlign: "left"}}>I build things for the web</p>
                  <p className="tombol" style={{textAlign: "left"}}><a href="about.html">Get In Touch</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
  )
}
